# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2020-05-26 11:04
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('goods', '0021_administrator_role'),
    ]

    operations = [
        migrations.RenameField(
            model_name='resourceadmin',
            old_name='resource',
            new_name='pid',
        ),
        migrations.RemoveField(
            model_name='administrator',
            name='role',
        ),
    ]
