from django.contrib import admin
from app.models import Pessoa, Empresa


@admin.register(Pessoa)
class PessoaAdmin(admin.ModelAdmin):
    list_display = (
        'nome_completo',
        'email',
        'data_nascimento',
        'formacao',
        'auto_descricao',
        'sexo',
    )
    search_fields = (
        'nome_completo',
        'email',
    )
    list_filter = (
        'sexo',
    )
@admin.register(Empresa)
class EmpresaAdmin(admin.ModelAdmin):
    list_display = (
        'nome_da_empresa',
        'segmento',
        'telefone_empresarial',
        'email',
    )