# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2020-05-22 11:16
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('goods', '0015_auto_20200522_1054'),
    ]

    operations = [
        migrations.AddField(
            model_name='resource',
            name='pid',
            field=models.IntegerField(default=0, verbose_name='二级嵌套id'),
            preserve_default=False,
        ),
    ]
