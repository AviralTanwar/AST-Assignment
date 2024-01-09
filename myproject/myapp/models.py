from django.db import models

# Create your models here.

class Job(models.Model):
    jobTitle = models.CharField(max_length=255)
    jobLink = models.URLField()
    companyName = models.CharField(max_length=255)
    companyLocation = models.CharField(max_length=255)
    jobDescription = models.TextField()
    salary = models.CharField(max_length=255)
    jobMetaData = models.CharField(max_length=255)
    jobPosting = models.CharField(max_length=255)
    date = models.DateTimeField()

    def __str__(self):
        return self.jobTitle
