<template>
  <div>
    <h1 class="text-primary mb-3 font-weight-bold">Contact</h1>
    <p class="my-4">
      Aan de hand van de onderstaande gegevens kunnen wij u een offerte aanbieden. Als u aangeeft interesse te hebben
      komt onze installateur bij u op bezoek om te kijken of er nog bijzonderheden zijn
    </p>

    <form name="contact" method="POST" action="/success/" data-netlify="true">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="email">Emailadres:</label>
            <input type="email" class="form-control" name="email" id="email" placeholder="Email">
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="name">Voor en achternaam:</label>
            <input type="text" class="form-control" name="Naam" id="name" placeholder="Voor en achternaam">
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label for="message">Bericht</label>
            <textarea placeholder="Bericht" class="form-control" name="Bericht" id="message"></textarea>
          </div>
        </div>
      </div>

      <button class="btn btn-primary w-100 btn-lg" type="submit">Verstuur</button>
    </form>

    <ContactSection></ContactSection>
  </div>
</template>

<script>
  import ContactSection from '../components/contact-section'

  export default {
    name: 'contact',
    head: {
      title: 'Neem contact met ons op | P.Stoop Bouwbedrijf'
    },
    components: {
      ContactSection
    }
  }
</script>

<style lang="scss" scoped>
  textarea {
    resize: none;
    min-height: 200px;
  }
</style>
