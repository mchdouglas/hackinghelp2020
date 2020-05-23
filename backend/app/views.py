from rest_framework import viewsets
from .models import Pessoa, Empresa
from .serializers import PessoaSerializer, EmpresaSerializer


class PessoaViewSet(viewsets.ModelViewSet):
    queryset = Pessoa.objects.all().order_by('pk')
    serializer_class = PessoaSerializer


class EmpresaViewSet(viewsets.ModelViewSet):
    queryset = Empresa.objects.all().order_by('pk')
    serializer_class = EmpresaSerializer

