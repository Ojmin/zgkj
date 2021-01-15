# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2020-04-02 19:28
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('goods', '0011_auto_20200402_1352'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderinfo',
            name='status',
            field=models.SmallIntegerField(choices=[(1, '待支付'), (2, '待发货'), (3, '已发货'), (4, '待收货'), (5, '已完成'), (6, '已取消'), (7, '退款中'), (8, '已退款'), (9, '退款失败')], default=1, verbose_name='订单状态'),
        ),
    ]
