# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-03-27 11:34
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('snippets', '0004_profileredux'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profileredux',
            name='user',
        ),
        migrations.AddField(
            model_name='profile',
            name='color',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='profile',
            name='date',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.DeleteModel(
            name='ProfileRedux',
        ),
    ]
