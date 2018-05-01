import React from "react";
import styled from "styled-components"

/* find the tweet, copy the code via click down -> embed tweet,
paste in here, rename class -> className, and remove the data-lang="en"
bit from the first <blockquote> element
*/

const TwitterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`

const TwitterColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`

export const tweets = () => ( // eslint-disable-line
  <TwitterRow>
    <TwitterColumn>
      <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Fascinating…Nextstrain uses genetic data from viruses to help scientists track the spread of disease outbreaks. <a href="https://t.co/6XtBvA5iiO">https://t.co/6XtBvA5iiO</a></p>&mdash; Bill Gates (@BillGates) <a href="https://twitter.com/BillGates/status/841750279972352005">March 14, 2017</a></blockquote>
      <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Well deserved <a href="https://twitter.com/wellcometrust">@wellcometrust</a> <a href="https://twitter.com/hashtag/OpenSciencePrize?src=hash">#OpenSciencePrize</a> for <a href="https://twitter.com/trvrb">@trvrb</a> / <a href="https://twitter.com/richardneher">@richardneher</a> with their <a href="https://t.co/ycLCoFyatD">https://t.co/ycLCoFyatD</a>. Cool new features on website! <a href="https://t.co/v9HQSFGlIy">pic.twitter.com/v9HQSFGlIy</a></p>&mdash; Kristian G. Andersen (@K_G_Andersen) <a href="https://twitter.com/K_G_Andersen/status/836624541933694976">February 28, 2017</a></blockquote>
      <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Here&#39;s NextStrain from <a href="https://twitter.com/richardneher">@richardneher</a> <a href="https://twitter.com/trvrb">@trvrb</a> used in Sierra Leone for realtime Ebola transmission. A powerful tool ! <a href="https://t.co/fN5sjzUWkL">pic.twitter.com/fN5sjzUWkL</a></p>&mdash; Matthew Cotten (@mlcotten13) <a href="https://twitter.com/mlcotten13/status/730892338394959872">May 12, 2016</a></blockquote>
      <blockquote className="twitter-tweet"><p lang="en" dir="ltr">A new genetic tool maps how deadly viruses spread around the world in real time <a href="https://t.co/3thyjplCFq">https://t.co/3thyjplCFq</a></p>&mdash; Quartz (@qz) <a href="https://twitter.com/qz/status/836608830784036864">February 28, 2017</a></blockquote>
      <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Nextstrain uses phylogenetics to track epidemics real-time and understand spread of disease <a href="https://twitter.com/hashtag/openscienceprize?src=hash">#openscienceprize</a> <a href="https://twitter.com/hashtag/BD2KOpenSci?src=hash">#BD2KOpenSci</a></p>&mdash; Lisa Federer (@lisafederer) <a href="https://twitter.com/lisafederer/status/804338351755010050">December 1, 2016</a></blockquote>
      <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Well said <a href="https://twitter.com/trvrb">@trvrb</a> ! <a href="http://t.co/CqXuO43x7p">http://t.co/CqXuO43x7p</a> <a href="http://t.co/uoq0CO4anX">http://t.co/uoq0CO4anX</a> <a href="http://t.co/zSVEJVVLMI">pic.twitter.com/zSVEJVVLMI</a></p>&mdash; Nick Loman (@pathogenomenick) <a href="https://twitter.com/pathogenomenick/status/612150119518093312">June 20, 2015</a></blockquote>
    </TwitterColumn>
    <TwitterColumn>
      <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Congrats <a href="https://twitter.com/hashtag/OpenSciencePrize?src=hash">#OpenSciencePrize</a> winners <a href="https://twitter.com/richardneher">@richardneher</a> <a href="https://twitter.com/trvrb">@trvrb</a> on prototype tracking spread of global pathogens in minutes <a href="https://t.co/8R1coPoTt0">https://t.co/8R1coPoTt0</a></p>&mdash; Francis S. Collins (@NIHDirector) <a href="https://twitter.com/NIHDirector/status/836714016475078661">February 28, 2017</a></blockquote>
      <blockquote className="twitter-tweet"><p lang="en" dir="ltr">lovely real time analysis of Ebola virus evolution, great example of timely live data sharing <a href="http://t.co/ZZbhehvo44">http://t.co/ZZbhehvo44</a> <a href="http://t.co/vqb3EbOeg1">pic.twitter.com/vqb3EbOeg1</a></p>&mdash; ben goldacre (@bengoldacre) <a href="https://twitter.com/bengoldacre/status/629634451832766464">August 7, 2015</a></blockquote>
      <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Vote for best open data project: <a href="https://t.co/XjHfFWiWLl">https://t.co/XjHfFWiWLl</a> My favorite: <a href="https://t.co/Iana59QyqN">https://t.co/Iana59QyqN</a> from <a href="https://twitter.com/richardneher">@richardneher</a> <a href="https://twitter.com/trvrb">@trvrb</a> <a href="https://t.co/XTj4bqdsVK">pic.twitter.com/XTj4bqdsVK</a></p>&mdash; Matthew Cotten (@mlcotten13) <a href="https://twitter.com/mlcotten13/status/804960157570662400">December 3, 2016</a></blockquote>
      <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Benchmark in data visualisation to help understand, track and manage outbreaks is <a href="http://t.co/A1SWuZ5DbM">http://t.co/A1SWuZ5DbM</a> <a href="https://twitter.com/hashtag/mHealthMeetup?src=hash">#mHealthMeetup</a></p>&mdash; Ctrl Group (@ctrl_group) <a href="https://twitter.com/ctrl_group/status/638788232793169920">September 1, 2015</a></blockquote>
      <blockquote className="twitter-tweet"><p lang="en" dir="ltr"><a href="https://t.co/RCFZfgStHs">https://t.co/RCFZfgStHs</a> shows the 2016 Nzerekore flare-up, sparked by a a survivor in which the virus remained evolutionarily static. <a href="https://t.co/RXeniJ3gtu">pic.twitter.com/RXeniJ3gtu</a></p>&mdash; Trevor Bedford (@trvrb) <a href="https://twitter.com/trvrb/status/783799220796923904">October 5, 2016</a></blockquote>
      <blockquote className="twitter-tweet"><p lang="en" dir="ltr">See <a href="https://t.co/3K19DNrxgy">https://t.co/3K19DNrxgy</a> used to construct lineages, visualize analysis of Ebola virus evolution, context and course of epidemic <a href="https://twitter.com/hashtag/AGBT16?src=hash">#AGBT16</a></p>&mdash; Orli Bahcall (@obahcall) <a href="https://twitter.com/obahcall/status/698580389598752769">February 13, 2016</a></blockquote>
    </TwitterColumn>
  </TwitterRow>
);