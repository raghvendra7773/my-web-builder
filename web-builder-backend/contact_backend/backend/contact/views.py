from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from .models import Contact


@api_view(["POST"])
def contact_view(request):
    try:
        name = request.data.get("name")
        email = request.data.get("email")
        phone = request.data.get("phone")
        message = request.data.get("message")

        # Validate required fields
        if not name or not email or not message:
            return Response(
                {
                    "success": False,
                    "error": "Name, Email and Message are required."
                },
                status=400
            )

        # Save data in database
        Contact.objects.create(
            name=name,
            email=email,
            phone=phone,
            message=message
        )

        # Send email notification
        send_mail(
            subject="New Website Inquiry",
            message=f"""
New Contact Form Submission

Name: {name}
Email: {email}
Phone: {phone}

Message:
{message}
            """,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=["webbuilder465@gmail.com"],
            fail_silently=False,
        )

        return Response(
            {
                "success": True,
                "message": "Message sent successfully"
            },
            status=200
        )

    except Exception as e:
        return Response(
            {
                "success": False,
                "error": str(e)
            },
            status=500
        )