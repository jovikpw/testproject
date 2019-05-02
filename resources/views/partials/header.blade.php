<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="{{ route('blog.index') }}">Store</a>
        <a class="navbar-brand" href="{{ route('other.about') }}">About</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
           <a href="{{url('register')}}"><button class="btn btn-outline-success my-0 my-sm-0" type="submit">Sign Up</button></a>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sign In
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                @if(!Auth::check())
                <a class="dropdown-item" href="{{url('/login')}}">Login</a>
                
                <div class="dropdown-divider"></div>
                @else
                <a class="dropdown-item" href="{{route('admin.index')}}">Posts</a>
                <a class="dropdown-item" href="{{url('/logout')}}"
                        onclick="event.preventDefault();
                            document.getElementById('logout-form').submit();">
                            Logout
                        </a>
                    <form id="logout-form" action="{{url('/logout')}}" method="POST"  style="display: none;">
                        {{ csrf_field() }} 
                    </form>
                @endif
              </div>
            </li>
          </ul>
          
          <!-- Navbar content 
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            
          </form> -->
        </div>
      </nav>