<?php
// Prevent direct access to the script
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['error' => 'Method Not Allowed']);
  exit;
}

// Set headers for CORS (allow requests from your domain)
// TODO: Before deploying, replace * with your actual domain (e.g., https://bllhdr.com.au)
header("Access-Control-Allow-Origin: https://bllhdr.com.au");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Rate limiting - prevents spam (1 submission per minute per session)
session_start();
$last_submit = $_SESSION['last_submit'] ?? 0;
if (time() - $last_submit < 60) {
  http_response_code(429);
  echo json_encode(['error' => 'Please wait a minute before submitting again.']);
  exit;
}

// Get the JSON payload
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate input
if (!isset($data['name']) || !isset($data['email']) || !isset($data['message'])) {
  http_response_code(400);
  echo json_encode(['error' => 'Missing required fields']);
  exit;
}

// Validate email format
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['error' => 'Invalid email address']);
  exit;
}

// Sanitize inputs (htmlspecialchars instead of deprecated FILTER_SANITIZE_STRING)
$name = htmlspecialchars($data['name'], ENT_QUOTES, 'UTF-8');
$email = $data['email']; // Already validated
$phone = isset($data['phone']) ? htmlspecialchars($data['phone'], ENT_QUOTES, 'UTF-8') : 'Not provided';
$reason = isset($data['reason']) ? htmlspecialchars($data['reason'], ENT_QUOTES, 'UTF-8') : 'General Inquiry';
$message = htmlspecialchars($data['message'], ENT_QUOTES, 'UTF-8');

// Email configuration
$to = 'belal@bllhdr.com.au';
$subject = "New Contact Request: $reason";
$headers = "From: Website Contact <noreply@bllhdr.com.au>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Email body (XSS protected with htmlspecialchars)
$body = "
<html>
<head>
  <title>New Contact Request</title>
</head>
<body>
  <h2>New Contact Request from Website</h2>
  <p><strong>Name:</strong> $name</p>
  <p><strong>Email:</strong> $email</p>
  <p><strong>Phone:</strong> $phone</p>
  <p><strong>Reason:</strong> $reason</p>
  <hr>
  <h3>Message:</h3>
  <p>" . nl2br($message) . "</p>
</body>
</html>
";

// Send email
if (mail($to, $subject, $body, $headers)) {
  $_SESSION['last_submit'] = time(); // Update rate limit timestamp
  echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
  http_response_code(500);
  echo json_encode(['error' => 'Failed to send email']);
}
?>