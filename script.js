<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Credit Card Form</title>
    <link rel="stylesheet" href="./styles.css" />
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <div class="card-preview-section">
            <div class="card-front">
                <img src="./images/bg-card-front.png" alt="Front of the credit card">
                <img src="./images/card-logo.svg" alt="Card logo" class="card-logo">
                <div class="number-output">0000 0000 0000 0000</div>
                <div class="card-info">
                    <span class="name-output">JANE APPLESEED</span>
                    <div class="date-output">
                        <span class="month-output">00</span>/<span class="year-output">00</span>
                    </div>
                </div>
            </div>
            <div class="card-back">
                <img src="./images/bg-card-back.png" alt="Back of the credit card">
                <div class="cvc-output">000</div>
            </div>
        </div>

        <div class="right-section">
            <form id="card-form" novalidate>
                <!-- Cardholder Name -->
                <div class="form-group">
                    <label for="cardholder-name">CARDHOLDER NAME</label>
                    <input type="text" id="cardholder-name" class="name-input" placeholder="e.g. Jane Appleseed" />
                    <small class="error empty">Can't be blank</small>
                    <small class="error invalid">Wrong format, letters only</small>
                </div>

                <!-- Card Number -->
                <div class="form-group">
                    <label for="card-number">CARD NUMBER</label>
                    <input type="text" id="card-number" class="number-input" placeholder="e.g. 1234 5678 9123 0000" maxlength="19" />
                    <small class="error empty">Can't be blank</small>
                    <small class="error invalid">Wrong format, numbers only</small>
                </div>

                <!-- Expiry Date + CVC -->
                <div class="form-row">
                    <div class="form-group date-container">
                        <label>EXP. DATE (MM/YY)</label>
                        <div class="date-inputs">
                            <div class="date-field">
                                <input type="text" class="date-input month-input" placeholder="MM" maxlength="2" />
                                <small class="error empty">Can't be blank</small>
                                <small class="error invalid">Wrong format, numbers only</small>
                            </div>
                            <div class="date-field">
                                <input type="text" class="date-input year-input" placeholder="YY" maxlength="2" />
                                <small class="error empty">Can't be blank</small>
                                <small class="error invalid">Wrong format, numbers only</small>
                            </div>
                        </div>
                    </div>

                    <div class="form-group cvc-container">
                        <label for="cvc-input">CVC</label>
                        <input type="text" id="cvc-input" class="cvc-input" placeholder="e.g. 123" maxlength="3" />
                        <small class="error empty">Can't be blank</small>
                        <small class="error invalid">Wrong format, numbers only</small>
                    </div>
                </div>

                <button type="submit" class="btn">Confirm</button>
            </form>

            <!-- Thank You State -->
            <div class="thank-you hidden">
                <img src="./images/icon-complete.svg" alt="Success icon">
                <h2>THANK YOU!</h2>
                <p>We've added your card details</p>
                <button class="btn continue-btn">Continue</button>
            </div>
        </div>
    </div>
    <script src="./index.js"></script>
</body>
</html>
