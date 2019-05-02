<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"">

    <title>Laravel</title>
    
    <link rel="stylesheet" href="{{url('css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/map.css')}}">
    <script src="{{url('js/jquery-3.4.0.min.js')}}"></script>
</head>
<body>
@include('partials.header')

<div class="container">
    @yield('content')
</div>

{{-- Google map api  --}}
<script async="" defer="" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA7a-pVRxc_cx00QNTiPWQZW50qxiqZGO0&libraries=places"></script>
<script src="{{asset('js/mapscript.js')}}"></script>
<script src="{{url('js/popper.min.js')}}"></script>
<script src="{{url('js/bootstrap.min.js')}}"></script>
</body>
</html>
