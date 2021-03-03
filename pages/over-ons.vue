<template>
  <div class="container">
    <Article
      title="Over ons"
      image="bus.jpg"
    >
      <p class="description">
        P.Stoop bouwbedrijf BV uit Made onderscheidt zich van andere bouw / aannemersbedrijven door de veelzijdigheid.
        Als jong en ambitieus bedrijf, maar wél met 20 jarenlange ervaring onder de pet, zetten wij ons voor de volle
        100% in. Met deskundigheid in advies, ontwerp én realisatie zijn wij één vaste gesprekspartner van droom tot
        oplevering.
      </p>
      <p class="description">
        Een kleine greep uit de diensten die P.Stoop bouwbedrijf (voorheen P.Stooptimmerwerken.BV) zoal verzorgt: -
        Nieuwbouw en aanbouw – verbouw en Renovatie - Dakkapel Stoop heeft rijke ervaring in zowel de Burgerlijke als de
        Utiliteitsbouw, en is vakbekwaam in de uitvoering. Als ‘meer met minder-adviseur’ zijn wij tevens sterk in
        energiezuinige oplossingen . Wij werken met vaste, betrouwbare en eerlijke partners en leveranciers, zodat u
        altijd er van op aan kan dat wij onze beloftes nakomen...met nét dat beetje extra!
      </p>
    </Article>

    <Article
      title="Nieuwbouw & Aanbouw"
      class="nieuwbouw"
      :reverse="true"
      image="nieuwbouw.jpg"
    >
      <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab earum libero mollitia quis
        similique sint sit totam ut voluptates? A alias ea et quidem recusandae.</p>
    </Article>

    <Article
      title="Verbouw & Renovatie"
      class="verbouw"
      :reverse="false"
      image="renovatie.jpg"
    >
      <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab earum libero mollitia quis
        similique sint sit totam ut voluptates? A alias ea et quidem recusandae.</p>
    </Article>

    <Article
      title="Partners & Leveranciers"
      class="partners"
      :reverse="true"
      image="partner.jpg"
    >
      <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab earum libero mollitia quis
        similique sint sit totam ut voluptates? A alias ea et quidem recusandae.</p>
    </Article>

    <Article
      title="Tegelwerk & badkamers"
      class="badkamers"
      image="partner.jpg"
    >
      <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab earum libero mollitia quis
        similique sint sit totam ut voluptates? A alias ea et quidem recusandae.</p>
    </Article>
    <p></p>
  </div>
</template>

<script>
import Article from '../components/article'

export default {
  name: 'over-ons',
  head: {
    title: 'Over Ons | P.Stoop Bouwbedrijf'
  },
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
