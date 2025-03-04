# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2020-05-22 16:15
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('goods', '0016_resource_pid'),
    ]

    operations = [
        migrations.AddField(
            model_name='roleresource',
            name='admin',
            field=models.CharField(blank=True, max_length=50, verbose_name='当前资源拥有哪些权限'),
        ),
        migrations.AddField(
            model_name='roleresource',
            name='pid',
            field=models.CharField(blank=True, max_length=150, verbose_name='当前菜单拥有哪些资源'),
        ),
        migrations.AlterField(
            model_name='roleresource',
            name='resource',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='goods.Resource', verbose_name='菜单资源外键'),
        ),
    ]
