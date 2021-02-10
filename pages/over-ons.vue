<template>
  <div class="container">
    <Article
      title="Over ons"
      :paragraphs="[
       `P.Stoop bouwbedrijf BV uit Made onderscheidt zich van andere aannemingsbedrijven door de veelzijdigheid. Als jong en ambitieus bedrijf, maar wél met 20 jarenlange ervaring onder de pet, zetten wij ons voor de volle 100% in. Met deskundigheid in advies, ontwerp én realisatie zijn wij één vaste gesprekspartner van droom tot oplevering.`,
       `Een kleine greep uit de diensten die P.Stoop bouwbedrijf (voorheen P.Stooptimmerwerken.BV) zoal verzorgt: - Nieuwbouw en aanbouw – verbouw en Renovatie - Dakkapel Stoop heeft rijke ervaring in zowel de Burgerlijke als de Utiliteitsbouw, en is vakbekwaam in de uitvoering. Als ‘meer met minder-adviseur’ zijn wij tevens sterk in energiezuinige oplossingen . Wij werken met vaste, betrouwbare en eerlijke partners en leveranciers, zodat u altijd er van op aan kan dat wij onze beloftes nakomen...met nét dat beetje extra!`
       ]"
      image="bus.jpg"
    ></Article>

    <Article
      title="Nieuwbouw & Aanbouw"
      class="nieuwbouw"
      :reverse="true"
      :paragraphs="[
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur consequatur delectus dolores dolorum, eius expedita illum ipsam iusto laudantium, necessitatibus quae quos sapiente, voluptatum.`,
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur consequatur delectus dolores dolorum, eius expedita illum ipsam iusto laudantium, necessitatibus quae quos sapiente, voluptatum.`
      ]"
      image="nieuwbouw.jpg"
    ></Article>

    <Article
      title="Verbouw & Renovatie"
      class="verbouw"
      :reverse="false"
      :paragraphs="[
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur consequatur delectus dolores dolorum, eius expedita illum ipsam iusto laudantium, necessitatibus quae quos sapiente, voluptatum.`,
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur consequatur delectus dolores dolorum, eius expedita illum ipsam iusto laudantium, necessitatibus quae quos sapiente, voluptatum.`
      ]"
      image="renovatie.jpg"
    ></Article>

    <Article
      title="Partners & Leveranciers"
      class="partners"
      :reverse="true"
      :paragraphs="[
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur consequatur delectus dolores dolorum, eius expedita illum ipsam iusto laudantium, necessitatibus quae quos sapiente, voluptatum.`,
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur consequatur delectus dolores dolorum, eius expedita illum ipsam iusto laudantium, necessitatibus quae quos sapiente, voluptatum.`
      ]"
      image="partner.jpg"
    ></Article>
    <p></p>
  </div>
</template>

<script>
  import Article from '../components/article'

  export default {
    name: 'over-ons',
    components: {
      Article
    },
    mounted() {
      if (this.$route.hash) {
        setTimeout(() => {
          const selector = this.$route.hash.substring(1)
          const container = this.$el.querySelector(`.${selector}`)
          container.scrollIntoView({ behavior: 'smooth' })
        }, 200)
      }
    }
  }
</script>

<style scoped>

</style>
