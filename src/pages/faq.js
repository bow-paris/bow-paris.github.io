import React from 'react'

import Layout from '../components/layout'
import ContentSection from '../components/ContentSection'

import {
  EVENT_LAMA_URL,
  TWITTER_URL,
  GOOGLE_MAPS_VENUE_URL,
} from '../constants'

const Question = ({ question, answer }) => (
  <article
    css={`
      margin-bottom: 16px;
    `}
  >
    <h3>{question}</h3>
    <p>{answer}</p>
  </article>
)

const Faq = () => (
  <Layout>
    <ContentSection title="FAQ">
      <Question
        question="Quand le CFP ouvrira-t-il&nbsp;?"
        answer="Le CFP de Best Of Web est ouvert depuis le 6 janvier 2020. Vous avez jusqu’au 29 février 2020 à 23h59 pour soumettre vos propositions."
      />
      <Question
        question="Quand saurai-je si ma proposition a été choisie&nbsp;?"
        answer="L’équipe vous notifiera de sa décision à la fin du mois de mars."
      />
      <Question
        question="Quel est le format des conférences&nbsp;?"
        answer={
          <p>
            Le même que les années précédentes&nbsp;:
            <ul>
              <li>
                Vous avez 20 minutes, plus 5 minutes supplémentaires pour les
                questions.
              </li>
              <li>Vous pouvez présenter en binôme, voir plus.</li>
              <li>Vous pouvez soumettre plusieurs propositions.</li>
              <li>
                Vous pouvez parler en français ou en anglais. Utilisez un titre
                en français si vous parlez dans cette langue&nbsp;: ce sera plus
                clair pour nous et le public.
              </li>
            </ul>
          </p>
        }
      />
      <Question
        question="Ma proposition a été choisie. Que se passe-t-il à partir de maintenant&nbsp;?"
        answer="Tout d’abord&nbsp;: félicitations&nbsp;!  Nous vous contacterons pour préparer votre venue et votre intervention. Nous vous accompagnerons jusqu’au jour J. Le 4 juin 2020, nous vous convierons à un dîner décontracté avec les autres oratrices et orateurs. Le 5 juin 2020, ce sera le grand jour ! Nous vous accueillerons et vous aiderons à vous installer. Enfin, vous aurez accès aux conférences gratuitement."
      />
      <Question
        question="Je n’ai jamais présenté de talk. Puis-je quand même répondre au Call For Papers&nbsp;?"
        answer="Bien sûr&nbsp;! Le Call For Papers de Best Of Web est ouvert aux oratrices et orateurs de tous niveaux. Vous n’avez jamais osé prendre la parole en public&nbsp;? Le public de Best Of Web est bienveillant. C’est le moment de se jeter à l’eau&nbsp;! L’équipe de Best Of Web est elle-même composée d’oratrices et orateurs. Nous serons disponibles pour vous accompagner dans votre préparation et votre organisation."
      />
    </ContentSection>

    <ContentSection title="Informations Pratiques">
      <Question
        question="Quand Best Of Web 2020 aura-t-il lieu&nbsp;?"
        answer={
          <p>
            Best Of Web 2020 se déroulera sur deux jours. Les conférences seront
            données tout au long de la journée du 5 juin 2020.
            <br />
            Vous pouvez d’ores et déjà{' '}
            <a href={EVENT_LAMA_URL}>prendre votre place</a>.
            <br />
            D’habitude la journée précédente est consacrée à des formations.
            Pour l’édition de 2020, nous vous préparons des surprises...
            <br />
            <a href={TWITTER_URL}>Suivez-nous sur Twitter</a> pour ne rien rater
            des prochaines annonces&nbsp;!
          </p>
        }
      />
      <Question
        question="Qui peut aller à Best Of Web&nbsp;?"
        answer="Tout le monde&nbsp;! Best Of Web est une conférence généraliste, ouverte aux développeuses et développeurs, Agilistes, product owners et product managers, designers, etc... de tous niveaux."
      />
      <Question
        question="Comment se rendre à Best Of Web ?"
        answer={
          <p>
            Best Of Web se déroulera à{' '}
            <a href={GOOGLE_MAPS_VENUE_URL}>
              {' '}
              la Grande Crypte, à Paris (16ème).
            </a>{' '}
            La Grande Crypte est située au 69 rue Boissière, à 15 minutes à pied
            de la Place de l’Etoile.
            <br />
            Vous pouvez y accéder&nbsp;:
            <ul>
              <li>
                Par les transports en commun&nbsp;:
                <ul>
                  <li>Victor Hugo (métro ligne 2)</li>
                  <li>Boissière (métro ligne 6)</li>
                  <li>Trocadéro (métro ligne 9)</li>
                  <li>Charles-de-Gaulle Étoile (RER A)</li>
                </ul>
              </li>
              <li>
                En voiture&nbsp;: vous pouvez consulter la liste des parkings
                sur le{' '}
                <a href="https://lagrandecrypte.com/acces-a-centre-sainte-honore-d-eylau/">
                  site de la Grande Crypte.
                </a>
              </li>
            </ul>
          </p>
        }
      />

      <Question
        question="Est-ce que la Grande Crypte est accessible&nbsp;?"
        answer="Oui. La Grande Crypte est équipée d’un ascenseur et tous les espaces sont accessibles aux personnes à mobilité réduite. L’équipe sera disponible pour vous accueillir et vous porter assistance. Ecrivez-nous à&nbsp;: bestofweb2015@gmail.com"
      />
      <Question
        question="Quid de l’impact écologique de Best Of Web&nbsp;?"
        answer={`Notre équipe a décidé d’opérer sa transition écologique.
Pour l’édition 2019, nous avons limité le gaspillage alimentaire : nous avons redistribué les restes du buffet grâce à l’AFESCAM (association qui vient en aide aux familles défavorisées). Nous recommencerons lors de l’édition 2020.
Par ailleurs, suite à un sondage sur Twitter, nous avons décidé de ne plus distribuer de sac en tissus (ou tote-bag). Les amatrices et amateurs de goodies pourront les trouver sur les stands des sponsors et à des emplacements dédiés.
Concernant les t-shirts, ils ne seront donnés qu’aux participantes et participants qui l’auront spécifié lors de l’achat de leur ticket.
En 2020, si vous souhaitez nous accompagner dans notre transition écologique :
Apportez votre gourde ou votre mug pour éviter l’usage de gobelets jetables.
Venez avec votre propre sac en tissus (par exemple, celui de Best Of Web 2018 ? ou Best Of Web 2019 ;) ) pour collecter des goodies.
Soyez vintage : enfilez le t-shirt d’une des éditions précédentes. #swag
`}
      />
      <Question
        question="Comment contacter l’équipe de Best Of Web&nbsp;?"
        answer="Pour toutes questions, vous pouvez nous écrire à&nbsp;: bestofweb2015@gmail.com"
      />
    </ContentSection>
  </Layout>
)

export default Faq
