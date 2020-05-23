from rest_framework import viewsets
from .models import Pessoa, Empresa, Atributo, Segmento
from .serializers import PessoaSerializer, EmpresaSerializer, AtributoSerializer, SegmentoSerializer


class PessoaViewSet(viewsets.ModelViewSet):
    queryset = Pessoa.objects.all().order_by('pk')
    serializer_class = PessoaSerializer


class EmpresaViewSet(viewsets.ModelViewSet):
    queryset = Empresa.objects.all().order_by('pk')
    serializer_class = EmpresaSerializer

class AtributoViewSet(viewsets.ModelViewSet):
    queryset = Atributo.objects.all().order_by('pk')
    serializer_class = AtributoSerializer

class SegmentoViewSet(viewsets.ModelViewSet):
    queryset = Segmento.objects.all().order_by('pk')
    serializer_class = SegmentoSerializer

