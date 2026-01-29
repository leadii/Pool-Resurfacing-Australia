# Email Validation

This skill provides email validation with disposable email domain blocking.

## Validation Rules

Email addresses must:
- Match standard email format (contains `@` and domain with TLD)
- Not be from known disposable email providers

## Blocked Disposable Domains

The following domains are blocked:
- test.com
- example.com
- tempmail.com
- throwaway.com
- mailinator.com
- guerrillamail.com
- sharklasers.com
- yopmail.com
- 10minutemail.com

## JavaScript Implementation

```javascript
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const disposableDomains = [
        'test.com', 'example.com', 'tempmail.com', 'throwaway.com', 'mailinator.com',
        'guerrillamail.com', 'sharklasers.com', 'yopmail.com', '10minutemail.com'
    ];

    if (!emailRegex.test(email)) {
        return { valid: false, message: 'Please enter a valid email address' };
    }

    const emailDomain = email.split('@')[1]?.toLowerCase();
    if (disposableDomains.includes(emailDomain)) {
        return { valid: false, message: 'Please use a valid personal or business email address' };
    }

    return { valid: true };
}
```

## Usage Example

```javascript
const emailResult = validateEmail(email);
const emailError = document.getElementById('error-email');

if (!emailResult.valid) {
    emailError.textContent = emailResult.message;
    emailError.classList.add('show');
    document.getElementById('email').classList.add('error');
    isValid = false;
} else {
    emailError.classList.remove('show');
    document.getElementById('email').classList.remove('error');
}
```

## HTML Structure

```html
<div class="form-group">
    <label class="form-label" for="email">Email *</label>
    <input type="email" id="email" name="email" class="form-input" placeholder="Enter your email address" required>
    <div class="error-message" id="error-email">Please enter a valid email address</div>
</div>
```

## Required CSS

```css
.form-input.error {
    border-color: #dc3545;
}

.error-message {
    color: #dc3545;
    font-size: 0.85rem;
    margin-top: 0.5rem;
    display: none;
}

.error-message.show {
    display: block;
}
```
