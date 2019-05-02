@extends('layouts.master')

@section('content')
    @include('partials.errors')
    <div class="row">
        <div class="col-md-12">
            <form enctype='multipart/form-data' action="{{ route('admin.create') }}" method="post">
                    
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" name="title">
                </div>
                <div class="form-group">
                    <label for="content">Content</label>
                    <input type="text" class="form-control" id="content" name="content">
                </div>
                <div class="form-group">
                        
                        <label for="Upload">Select image to upload</label><br>
                        <form action="{{ URL ::to('upload')}} method="post" enctype="multipart/form-data">
                        <input type="file" name="file" id="file">
                        <input type="hidden" value="{{csrf_token()}}" name="_token">
                    
                </div>
                @foreach($tags as $tag)
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="tags[]" value="{{ $tag->id }}"> {{ $tag->name }}
                        </label>
                    </div>
                @endforeach
                {{ csrf_field() }}
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
@endsection