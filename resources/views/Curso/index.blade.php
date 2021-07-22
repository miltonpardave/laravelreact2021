{{ $mensaje }}
<br>
Hola mundo desde la página!!
<ul>
@foreach($cursos as $curso)
    <li>{{ $curso->nombre_curso." ".$curso->ciclo." ".$curso->creditos." " }}</li>
@endforeach
</ul>

<div id="example" name="2020"></div>

<script src="{{asset('js/app.js')}}"></script>