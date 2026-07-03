<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $service = $_POST['service'];
    $organization = $_POST['organization'];
    $employees = $_POST['employees'];
    $dropMessage = $_POST['dropMessage'];
    $auditRequest = isset($_POST['auditRequest']) ? "Yes" : "No";

    // Set email recipients
    $to = "contact@vircfoconsulting.com";
    $subject = "Enquiry from website";

    $body = "Name: $name
    Email: $email
    Phone Number: $number
    Service: $service
    Organization: $organization
    Number of Employees: $employees
    Free 1-Hour Compliance Audit: $auditRequest

    Message:
    $dropMessage";

    // Send email to primary recipient
    $mailStatus = mail($to, $subject, $body);
    $mailTest = mail("info@sksstatutory.com", $subject, $body);

    // Redirect based on success or failure
    if ($mailStatus) {
        header("Location: contact.html?emailSuccess=true");
    } else {
        header("Location: contact.html?emailSuccess=false");
    }
    exit;
}
?>