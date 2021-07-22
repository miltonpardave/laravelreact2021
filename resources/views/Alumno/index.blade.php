<input type="text" id="csrf-token" value="{{ csrf_token() }}">
<header></header>
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>
<ul>
@foreach($alumnos as $alumno)
    <li>
        {{$alumno->nombres}}
    </li>
@endforeach
</ul>

<div id="example" name="2020"></div>

<script src="{{asset('js/app.js')}}"></script>
<footer></footer>