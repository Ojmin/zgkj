# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2020-05-25 14:09
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('goods', '0020_auto_20200525_1339'),
    ]

    operations = [
        migrations.AddField(
            model_name='administrator',
            name='role',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='goods.Role', verbose_name='外键关联角色表'),
        ),
    ]
