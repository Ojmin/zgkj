# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2020-05-06 18:55
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('goods', '0012_auto_20200402_1928'),
    ]

    operations = [
        migrations.AlterField(
            model_name='freightmanage',
            name='include_section',
            field=models.CharField(blank=True, default='', max_length=40, verbose_name='包邮区域'),
        ),
    ]
