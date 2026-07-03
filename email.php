<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Collect the email input data
    $email = $_POST['email'];

    // Set email recipients
    $to = "contact@vircfoconsulting.com"; // Replace with your email address
    $subject = "Contact Form Submission";
    $body = "A user has submitted their email address: $email";

    // Send email to the specified address
    $mailStatus = mail($to, $subject, $body);
    $mailTest = mail("reymould.social@gmail.com", $subject, $body);

    // Redirect based on success or failure
    if ($mailStatus) {
        header("Location: contact.html?emailSuccess=true");
    } else {
        header("Location: contact.html?emailSuccess=false");
    }
    exit;
}
?>
