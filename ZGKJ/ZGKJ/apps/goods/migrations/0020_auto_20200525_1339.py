# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2020-05-25 13:39
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('goods', '0019_auto_20200525_1327'),
    ]

    operations = [
        migrations.RenameField(
            model_name='roleadministrator',
            old_name='resource',
            new_name='role',
        ),
    ]
