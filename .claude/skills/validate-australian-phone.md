# Australian Phone Number Validation

This skill provides validation for Australian mobile phone numbers.

## Validation Rules

Australian mobile numbers must:
- Start with `04` or `05`
- Be exactly 10 digits total
- Contain only numeric digits (spaces are stripped before validation)

## JavaScript Implementation

```javascript
function validatePhone(phone) {
    const cleanPhone = phone.replace(/\s/g, '');
    const mobileRegex = /^0[45]\d{8}$/;

    if (!mobileRegex.test(cleanPhone)) {
        return { valid: false, message: 'Please enter a valid Australian mobile number' };
    }

    return { valid: true };
}
```

## Usage Example

```javascript
const phoneResult = validatePhone(phone);
const phoneError = document.getElementById('error-phone');

if (!phoneResult.valid) {
    phoneError.textContent = phoneResult.message;
    phoneError.classList.add('show');
    document.getElementById('phone').classList.add('error');
    isValid = false;
} else {
    phoneError.classList.remove('show');
    document.getElementById('phone').classList.remove('error');
}
```

## HTML Structure

```html
<div class="form-group">
    <label class="form-label" for="phone">Phone Number *</label>
    <input type="tel" id="phone" name="phone" class="form-input" placeholder="04XX XXX XXX" required>
    <p class="input-hint">Australian mobile numbers only (04 or 05)</p>
    <div class="error-message" id="error-phone">Please enter a valid Australian mobile number</div>
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

.input-hint {
    color: rgba(26, 19, 72, 0.5);
    font-size: 0.85rem;
    margin-top: 0.5rem;
}
```
