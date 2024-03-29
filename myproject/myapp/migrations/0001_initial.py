# Generated by Django 4.1.13 on 2024-01-09 05:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Job',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('jobTitle', models.CharField(max_length=255)),
                ('jobLink', models.URLField()),
                ('companyName', models.CharField(max_length=255)),
                ('companyLocation', models.CharField(max_length=255)),
                ('jobDescription', models.TextField()),
                ('salary', models.CharField(max_length=255)),
                ('jobMetaData', models.CharField(max_length=255)),
                ('jobPosting', models.CharField(max_length=255)),
                ('date', models.DateTimeField()),
            ],
        ),
    ]
