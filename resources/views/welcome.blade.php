<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: lightblue;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }

            
        </style>
    </head>

          @extends('layouts.main-layout')

          @section('contenuto-pagina')
                @{{message}}
            <div class="container">
              <h1>Passa a Premium gratis per 1 mese</h1>

              <h3>Al termine dell'offerta,solo € 9,99 al mese. Annulla in qualsiasi momento.</h3>

              <button type="button" name="button">VEDI I PIANI</button>
            </div>

            <div  class="finestra" :class="{ active: isActive }">
              <button class="close-button" aria-label="Dismiss alert" type="button" data-close @click="chiudi">
                <span aria-hidden="true">&times;</span>
              </button>

              <h2>pop up per coockies</h2>
              <p><strong>Includes</strong></p>
              <ul>
                <li>12 months contract applies</li>
                <li>No data charges for music listened</li>
                <li>No ads</li>
              </ul>

              <button id="subscribe" type="button" name="button">Subscribe</button>

              <a href="#">Or $9.90 per month without contract</a>
            </div>

          @endsection
</html>
