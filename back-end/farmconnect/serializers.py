from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Job, UserProfile
from django.contrib.auth import authenticate
class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = '__all__'

class RegisterSerializer(serializers.ModelSerializer):

    phone = serializers.CharField()
    role = serializers.ChoiceField(
        choices=['farmer', 'labourer']
    )
    location = serializers.CharField()
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = [
            'username',
            'email',
            'password',
            'phone',
            'role',
            'location'
        ]

    def create(self, validated_data):
        phone = validated_data.pop('phone')
        role = validated_data.pop('role')
        location = validated_data.pop('location')

        user = User.objects.create_user(**validated_data)

        UserProfile.objects.create(
            user=user,
            phone=phone,
            role=role,
            location=location
        )

        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(
            username=data['username'],
            password=data['password']
        )

        if not user:
            raise serializers.ValidationError(
                "Invalid username or password"
            )

        data['user'] = user
        return data