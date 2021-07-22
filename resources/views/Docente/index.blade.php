
{{$mensaje}}<br>
Hola Docente!!
<ul>
@foreach($docentes as $docente)
    <li>{{ $docente->nombres_docente." ".$docente->escuela }}</li>
@endforeach
</ul>

<div id="example" name="2020"></div>

<script src="{{asset('js/app.js')}}"></script>