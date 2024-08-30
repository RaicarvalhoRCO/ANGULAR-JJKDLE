// champion.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {
  private champions = [
{
      name:'Itadori Yuuji',
      gender:'Male',
      species:'Human',
      hair:'Pink',
      statusTip:'Alive',
      innateTechniques:'Blood Manipulation / Shrine',
      domainExpansion:'Unnamed',
      grade:'Unknow',
      mangaDebutTip:'1',
      arcDebut:'Prologue',
      photo: '../assets/images/itadori.png',
},
{
      name:'Satoru Gojo',
      gender:'Male',
      species:'Human',
      hair:'White',
      statusTip:'Deceased',
      innateTechniques:'Limitless / Six Eyes',
      domainExpansion:'Unlimited Void',
      grade:'Special',
      mangaDebutTip:'1',
      arcDebut:'Prologue',
      photo: '../assets/images/satoru.png',
},
{
      name:'Ryomen Sukuna',
      gender:'Male',
      species:'Human / Incarnation',
      hair:'Pink',
      statusTip:'Alive',
      innateTechniques:'Shrine / Divine Flame / Ten Shadowns Technique',
      domainExpansion:'Malevolent Shrine',
      grade:'Special',
      mangaDebutTip:'1',
      arcDebut:'Prologue',
      photo: '../assets/images/sukuna.png',
},
{
      name:'Megumi Fushiguro',
      gender:'Male',
      species:'Human',
      hair:'Black',
      statusTip:'Alive',
      innateTechniques:'Ten Shadowns Technique',
      domainExpansion:'Chimera Shadow Garden',
      grade:'2',
      mangaDebutTip:'1',
      arcDebut:'Prologue',
      photo: '../assets/images/megumi.png',
},
{
      name:'Yuta Okkotsu',
      gender:'Male',
      species:'Human',
      hair:'Black',
      statusTip:'Alive',
      innateTechniques:'Copy',
      domainExpansion:'Authentic Mutual Love',
      grade:'Special',
      mangaDebutTip:'137',
      arcDebut:'Itadori Extermination Arc',
      photo: '../assets/images/yuta.png',
},
{
      name:'Nobara Kugisaki',
      gender:'Female',
      species:'Human',
      hair:'Ginger',
      statusTip:'Unknow',
      innateTechniques:'Straw Doll Technique',
      domainExpansion:'None',
      grade:'3',
      mangaDebutTip:'3',
      arcDebut:'Fearsome Womb Arc',
      photo: '../assets/images/nobara.png',
},
{
      name:'Masamichi Yaga',
      gender:'Male',
      species:'Human',
      hair:'Dark Brown',
      statusTip:'Deceased',
      innateTechniques:'Cursed Corpse',
      domainExpansion:'None',
      grade:'1',
      mangaDebutTip:'3',
      arcDebut:'Fearsome Womb Arc',
      photo: '../assets/images/masamichi.png',
},
{
      name:'Atsuya Kusakabe',
      gender:'Male',
      species:'Human',
      hair:'Brown',
      statusTip:'Alive',
      innateTechniques:'None',
      domainExpansion:'None',
      grade:'1',
      mangaDebutTip:'83',
      arcDebut:'Itadori Extermination Arc',
      photo: '../assets/images/atsuya.png',
},
{
      name:'Kiyotaka Ijichi',
      gender:'Male',
      species:'Human',
      hair:'Black',
      statusTip:'Alive',
      innateTechniques:'None',
      domainExpansion:'None',
      grade:'Unknow',
      mangaDebutTip:'2',
      arcDebut:'Fearsome Womb Arc',
      photo: '../assets/images/kiyotaka.png',
},
{
      name:'Shoko Ieiri',
      gender:'Female',
      species:'Human',
      hair:'Brown',
      statusTip:'Alive',
      innateTechniques:'None',
      domainExpansion:'None',
      grade:'Unknow',
      mangaDebutTip:'10',
      arcDebut:'Fearsome Womb Arc',
      photo: '../assets/images/shoko.png',
},
{
      name:'Akari Nitta',
      gender:'Female',
      species:'Human',
      hair:'Blonde',
      statusTip:'Alive',
      innateTechniques:'None',
      domainExpansion:'None',
      grade:'Unknow',
      mangaDebutTip:'55',
      arcDebut:'Death Painting Arc',
      photo: '../assets/images/akari.png',
},
{
      name:'Maki Zenin',
      gender:'Female',
      species:'Human',
      hair:'Dark Green',
      statusTip:'Alive',
      innateTechniques:'Heavenly Restriction',
      domainExpansion:'None',
      grade:'4',
      mangaDebutTip:'10',
      arcDebut:'Fearsome Womb Arc',
      photo: '../assets/images/maki.png',
},
{
      name:'Toge Inumaki',
      gender:'Male',
      species:'Human',
      hair:'Platinum Blonde',
      statusTip:'Alive',
      innateTechniques:'Cursed Speech',
      domainExpansion:'None',
      grade:'Semi 1',
      mangaDebutTip:'1',
      arcDebut:'Prologue',
      photo: '../assets/images/toge.png',
},
{
      name:'Panda',
      gender:'Male',
      species:'Cursed Corpse',
      hair:'No hair',
      statusTip:'Alive',
      innateTechniques:'None',
      domainExpansion:'None',
      grade:'Semi 2',
      mangaDebutTip:'1',
      arcDebut:'Prologue',
      photo: '../assets/images/panda.png',
},
{
      name:'Kinji Hakari',
      gender:'Male',
      species:'Human',
      hair:'Blonde',
      statusTip:'Alive',
      innateTechniques:'Private Pure Love Train',
      domainExpansion:'Idle Death Gamble',
      grade:'Unknow',
      mangaDebutTip:'153',
      arcDebut:'Perfect Preparation Arc',
      photo: '../assets/images/kinji.png',
},
{
      name:'Kirara Hoshi',
      gender:'Male',
      species:'Human',
      hair:'Black',
      statusTip:'Alive',
      innateTechniques:'Love Rendezvous',
      domainExpansion:'None',
      grade:'Unknow',
      mangaDebutTip:'153',
      arcDebut:'Perfect Preparation Arc',
      photo: '../assets/images/kirara.png',
},
{
      name:'Mahito',
      gender:'Male',
      species:'Cursed Spirit',
      hair:'Ligth Blue',
      statusTip:'Deceased',
      innateTechniques:'Idle Transfiguration',
      domainExpansion:'Self-Embodiment of Perfection',
      grade:'Special',
      mangaDebutTip:'16',
      arcDebut:'Fearsome Womb Arc',
      photo: '../assets/images/mahito.png',
},
{
      name:'Jogo',
      gender:'Male',
      species:'Cursed Spirit',
      hair:'No hair',
      statusTip:'Deceased',
      innateTechniques:'Disaster Flames',
      domainExpansion:'Coffin of the Iron Mountain',
      grade:'Special',
      mangaDebutTip:'10',
      arcDebut:'Fearsome Womb Arc',
      photo: '../assets/images/jogo.png',
},
{
      name:'Hanami',
      gender:'Male',
      species:'Cursed Spirit',
      hair:'No hair',
      statusTip:'Deceased',
      innateTechniques:'Disaster Plants',
      domainExpansion:'Shining Sea of Growing Branches',
      grade:'Special',
      mangaDebutTip:'10',
      arcDebut:'Fearsome Womb Arc',
      photo: '../assets/images/hanami.png',
},
{
      name:'Dagon',
      gender:'Male',
      species:'Cursed Spirit',
      hair:'No hair',
      statusTip:'Deceased',
      innateTechniques:'Disaster Tides',
      domainExpansion:'Horizon of the Captivating Skandha',
      grade:'Special',
      mangaDebutTip:'10',
      arcDebut:'Fearsome Womb Arc',
      photo: '../assets/images/dagon.png',
},
{
      name:'Rika Orimoto',
      gender:'Female',
      species:'Cursed Spirit',
      hair:'No hair',
      statusTip:'Deceased',
      innateTechniques:'None',
      domainExpansion:'None',
      grade:'Special',
      mangaDebutTip:'137',
      arcDebut:'Itadori Extermination Arc',
      photo: '../assets/images/rika.png',
},
{
      name:'Yoshinobu Gakuganji',
      gender:'Male',
      species:'Human',
      hair:'No hair',
      statusTip:'Alive',
      innateTechniques:'Unnamed',
      domainExpansion:'None',
      grade:'Unknow',
      mangaDebutTip:'18',
      arcDebut:'Fearsome Womb Arc',
      photo: '../assets/images/yoshinobu.png',
},
{
      name:'Utahime Iori',
      gender:'Female',
      species:'Human',
      hair:'Black',
      statusTip:'Alive',
      innateTechniques:'Solo Forbidden Area',
      domainExpansion:'None',
      grade:'Semi 1',
      mangaDebutTip:'32',
      arcDebut:'Kyoto Goodwill Event Arc',
      photo: '../assets/images/utahime.png',
},
{
      name:'Kasumi Miwa',
      gender:'Female',
      species:'Human',
      hair:'Blue',
      statusTip:'Alive',
      innateTechniques:'None',
      domainExpansion:'None',
      grade:'Unknow',
      mangaDebutTip:'18',
      arcDebut:'Fearsome Womb Arc',
      photo: '../assets/images/miwa.png',
},
{
      name:'Kokichi Muta (Mechamaru)',
      gender:'Male',
      species:'Human',
      hair:'Black',
      statusTip:'Deceased',
      innateTechniques:'Puppet Manipulation / Heavenly Restriction',
      domainExpansion:'None',
      grade:'Semi 1',
      mangaDebutTip:'32',
      arcDebut:'Kyoto Goodwill Event Arc',
      photo: '../assets/images/mechamaru.png',
},
{
      name:'Mai Zenin',
      gender:'Female',
      species:'Human',
      hair:'Dark Green',
      statusTip:'Deceased',
      innateTechniques:'Construction',
      domainExpansion:'None',
      grade:'3',
      mangaDebutTip:'16',
      arcDebut:'Fearsome Womb Arc',
      photo: '../assets/images/mai.png',
},
{
      name:'Noritoshi Kamo',
      gender:'Male',
      species:'Human',
      hair:'Black',
      statusTip:'Alive',
      innateTechniques:'Blood Manipulation',
      domainExpansion:'None',
      grade:'Semi 1',
      mangaDebutTip:'32',
      arcDebut:'Kyoto Goodwill Event Arc',
      photo: '../assets/images/noritoshi.png',
},
{
      name:'Aoi Todo',
      gender:'Male',
      species:'Human',
      hair:'Black',
      statusTip:'Alive',
      innateTechniques:'Boogie Woogie',
      domainExpansion:'None',
      grade:'1',
      mangaDebutTip:'16',
      arcDebut:'Fearsome Womb Arc',
      photo: '../assets/images/todo.png',
},
{
      name:'Momo Nishimiya',
      gender:'Female',
      species:'Human',
      hair:'Blonde',
      statusTip:'Alive',
      innateTechniques:'Tool Manipulation',
      domainExpansion:'None',
      grade:'Unknow',
      mangaDebutTip:'32',
      arcDebut:'Kyoto Goodwill Event Arc',
      photo: '../assets/images/momo.png',
},
{
      name:'Kento Nanami',
      gender:'Male',
      species:'Human',
      hair:'Blonde',
      statusTip:'Deceased',
      innateTechniques:'Ratio Technique',
      domainExpansion:'None',
      grade:'1',
      mangaDebutTip:'18',
      arcDebut:'Fearsome Womb Arc',
      photo: '../assets/images/nanami.png',
},
{
      name:'Takuma Ino',
      gender:'Male',
      species:'Human',
      hair:'Black',
      statusTip:'Alive',
      innateTechniques:'Auspicious Beasts Summon',
      domainExpansion:'None',
      grade:'2',
      mangaDebutTip:'26',
      arcDebut:'Vs. Mahito Arc',
      photo: '../assets/images/ino.png',
},
{
      name:'Mei Mei',
      gender:'Female',
      species:'Human',
      hair:'Blue',
      statusTip:'Alive',
      innateTechniques:'Black Bird Manipulation',
      domainExpansion:'None',
      grade:'1',
      mangaDebutTip:'40',
      arcDebut:'Kyoto Goodwill Event Arc',
      photo: '../assets/images/meimei.png',
},
{
      name:'Yuki Tsukumo',
      gender:'Female',
      species:'Human',
      hair:'Blonde',
      statusTip:'Deceased',
      innateTechniques:'Star Rage',
      domainExpansion:'Unnamed',
      grade:'Special',
      mangaDebutTip:'50',
      arcDebut:'Kyoto Goodwill Event Arc',
      photo: '../assets/images/yuki.png',
},
{
      name:'Tengen',
      gender:'Female',
      species:'Human / Cursed Spirit',
      hair:'No hair',
      statusTip:'Deceased',
      innateTechniques:'Immortality',
      domainExpansion:'None',
      grade:'Unknow',
      mangaDebutTip:'144',
      arcDebut:'Perfect Preparation Arc',
      photo: '../assets/images/tengen.png',
},
{
      name:'Naobito Zenin',
      gender:'Male',
      species:'Human',
      hair:'Gray',
      statusTip:'Deceased',
      innateTechniques:'Projection Sorcery',
      domainExpansion:'None',
      grade:'Special 1',
      mangaDebutTip:'42',
      arcDebut:'Kyoto Goodwill Event Arc',
      photo: '../assets/images/naobito.png',
},
{
      name:'Naoya Zenin',
      gender:'Male',
      species:'Vengeful Curse',
      hair:'No hair',
      statusTip:'Deceased',
      innateTechniques:'Projection Sorcery',
      domainExpansion:'Time Cell Moon Palace',
      grade:'Special 1',
      mangaDebutTip:'138',
      arcDebut:'Itadori Extermination Arc',
      photo: '../assets/images/naoya.png',
},
{
      name:'Ogi Zenin',
      gender:'Male',
      species:'Human',
      hair:'Black',
      statusTip:'Deceased',
      innateTechniques:'Falling Blossom Emotion',
      domainExpansion:'Falling Blossom Emotion',
      grade:'Special 1',
      mangaDebutTip:'138',
      arcDebut:'Itadori Extermination Arc',
      photo: '../assets/images/ogi.png',
},
{
      name:'Hajime Kashimo',
      gender:'Male',
      species:'Human / Incarnation',
      hair:'Blue',
      statusTip:'Deceased',
      innateTechniques:'Mythical Beast Amber',
      domainExpansion:'None',
      grade:'Unknow',
      mangaDebutTip:'158',
      arcDebut:'Perfect Preparation Arc',
      photo: '../assets/images/hajime.png',
},
{
      name:'Hana Kurusu',
      gender:'Female',
      species:'Human',
      hair:'Blonde',
      statusTip:'Alive',
      innateTechniques:'Technique Extinguishment',
      domainExpansion:'None',
      grade:'Unknow',
      mangaDebutTip:'145',
      arcDebut:'Perfect Preparation Arc',
      photo: '../assets/images/hana.png',
},
{
      name:'Hiromi Higuruma',
      gender:'Male',
      species:'Human',
      hair:'Brown',
      statusTip:'Deceased',
      innateTechniques:'Deadly Sentencing',
      domainExpansion:'Deadly Sentencing',
      grade:'Unknow',
      mangaDebutTip:'158',
      arcDebut:'Perfect Preparation Arc',
      photo: '../assets/images/higuruma.png',
},
{
      name:'Fumihiko Takaba',
      gender:'Male',
      species:'Human',
      hair:'Black',
      statusTip:'Alive',
      innateTechniques:'Comedian',
      domainExpansion:'None',
      grade:'Unknow',
      mangaDebutTip:'146',
      arcDebut:'Perfect Preparation Arc',
      photo: '../assets/images/takaba.png',
}
      
  ];

  constructor() { }

  getChampions() {
    return this.champions;
  }

  getChampion(name: string) {
    return this.champions.find(champion => champion.name.toLowerCase() === name.toLowerCase());
  }
}
