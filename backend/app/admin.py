from django.contrib import admin
from app.models import Pessoa


@admin.register(Pessoa)
class PessoaAdmin(admin.ModelAdmin):
    list_display = (
        'nome_completo',
        'email',
        'idade',
        'formacao',
        'auto_descricao',
        'sexo'
    )
    search_fields = (
        'nome_completo',
        'email',
    )
    list_filter = (
        'sexo',
    )

