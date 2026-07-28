# 


from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail
from .models import Contact


@api_view(["POST"])
def contact_view(request):
    try:
        name = request.data.get("name")
        email = request.data.get("email")
        phone = request.data.get("phone")
        message = request.data.get("message")

        # Save contact data to database
        Contact.objects.create(
            name=name,
            email=email,
            phone=phone,
            message=message
        )

        # Send email to your Gmail
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
            from_email="webbuilder465@gmail.com",
            recipient_list=["webbuilder465@gmail.com"],
            fail_silently=False,
        )

        return Response({
            "success": True,
            "message": "Message sent successfully"
        })

    except Exception as e:
        return Response({
            "success": False,
            "error": str(e)
        }, status=500)