# Generated by Django 3.2.7 on 2021-09-17 00:11

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('tag_line', models.TextField()),
                ('description', models.TextField()),
                ('company_pic', models.ImageField(default='/pic_folder/nologo.jpg', upload_to='pic_folder/')),
                ('employee', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Feedback',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=30)),
                ('phone_number', models.IntegerField()),
                ('comment', models.TextField()),
                ('timestamp', models.DateTimeField(blank=True, default=datetime.datetime(2021, 9, 17, 3, 11, 6, 687292))),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='feedback.company')),
            ],
        ),
    ]
