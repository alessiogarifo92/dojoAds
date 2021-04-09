<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Main Layout</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
      <script src="{{ asset('js/app.js') }}"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
      <div id="app" :class="{ fade: isActive }">
      <!-- header -->
        @include('components.header')

          @yield('contenuto-pagina')


        <!-- footer -->
        @include('components.footer')
      </div>
  </body>
</html>
