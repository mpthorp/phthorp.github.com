# EmailJS Setup Instructions

To make the contact form send actual emails to mark.thorp@gmail.com, you need to set up EmailJS. Follow these steps:

## 1. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Create a free account
3. You get 200 free emails per month

## 2. Set Up Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (recommended) or another email provider
4. Follow the setup instructions to connect your Gmail account
5. Note down your **Service ID** (something like `service_abc123`)

## 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Set up your template with these variables:
   ```
   Subject: New Contact Form Submission from {{from_name}}
   
   From: {{from_name}} <{{from_email}}>
   Phone: {{phone}}
   
   Message:
   {{message}}
   ```
4. Set the **To Email** field to `mark.thorp@gmail.com`
5. Note down your **Template ID** (something like `template_abc123`)

## 4. Get Public Key
1. Go to **Account** > **General**
2. Copy your **Public Key** (something like `abc123xyz`)

## 5. Update Contact.tsx
Replace the placeholder values in Contact.tsx:

```typescript
const EMAILJS_SERVICE_ID = 'your_service_id_here';
const EMAILJS_TEMPLATE_ID = 'your_template_id_here'; 
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
```

Then uncomment the emailjs.send() code block and comment out the simulation code.

## 6. Environment Variables (Optional but Recommended)
For security, you can store these in environment variables:

1. Create a `.env` file in your project root:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

2. Update Contact.tsx to use environment variables:
   ```typescript
   const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
   const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
   const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
   ```

3. Add `.env` to your `.gitignore` file

## Testing
Once configured, the contact form will:
- Validate all required fields (name, email, message)
- Show loading state while sending
- Display success confirmation
- Send email to mark.thorp@gmail.com
- Allow sending another message

The form is currently in simulation mode - it will show the success message but won't actually send emails until you complete the EmailJS setup.