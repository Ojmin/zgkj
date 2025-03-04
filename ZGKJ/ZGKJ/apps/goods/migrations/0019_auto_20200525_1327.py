# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2020-05-25 13:27
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('goods', '0018_auto_20200525_0916'),
    ]

    operations = [
        migrations.CreateModel(
            name='RoleAdministrator',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('create_time', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
                ('update_time', models.DateTimeField(auto_now=True, verbose_name='更新时间')),
            ],
            options={
                'verbose_name': '资源权限表',
                'db_table': 'tb_role_admin',
            },
        ),
        migrations.RemoveField(
            model_name='administrator',
            name='role',
        ),
        migrations.AddField(
            model_name='roleadministrator',
            name='admin',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='goods.Administrator', verbose_name='管理员外键'),
        ),
        migrations.AddField(
            model_name='roleadministrator',
            name='resource',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='goods.Role', verbose_name='角色外键'),
        ),
    ]
