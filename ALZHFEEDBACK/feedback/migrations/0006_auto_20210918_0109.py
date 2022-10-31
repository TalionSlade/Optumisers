# Generated by Django 3.2.7 on 2021-09-17 22:09

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('feedback', '0005_alter_feedback_timestamp'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='company_pic',
            field=models.ImageField(default='./pic_folder/nologo.jpg', upload_to='./pic_folder/'),
        ),
        migrations.AlterField(
            model_name='feedback',
            name='timestamp',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2021, 9, 18, 1, 9, 16, 671930)),
        ),
    ]