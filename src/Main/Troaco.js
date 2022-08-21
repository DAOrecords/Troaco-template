import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getBuyableTokens, verify_sha256 } from '../../utils';
import 'regenerator-runtime/runtime';
import TopMenu from './TopMenu';
import Landing from './Landing';
import Logo from './Logo';
import BottomMenu from './BottomMenu';
import MyNFTs from './MyNFTs';
import globeBg from '../../assets/globe_bg.jpg';
import GuestBook from './GuestBook';


export default function Troaco({newAction, openGuestBook, setGuestBook, setShowWallet, showWallet, isMyNfts}) {
  const [selected, setSelected] = useState(0);

  const bgStyle = {
    backgroundImage: `url(${globeBg})`,
    backgroundSize: "auto",
    backgroundPosition: "center",
    backgroundRepeat: "repeat-x",
  }

  /*
  const screenWidth = window.innerWidth;
  const [nftList, setNftList] = React.useState([]);  

  React.useEffect(async () => {    
    const urlParams = window.location.search;
    if (urlParams.includes('errorCode')) {
      newAction({
        errorMsg: "There was an error while processing the transaction!", errorMsgDesc: URLSearchParams.get('errorCode'),
      }); 
    } else if (urlParams.includes('transactionHashes')) {
      newAction({
        successMsg: "Success!", successMsgDesc: "You bought a new NFT!",
      });
    }

    const buyable = await getBuyableTokens();
    const orderedBuyable = buyable.sort(function(a, b) {
      const firstNum = a.token_id.slice(10, a.token_id.lastIndexOf("-"));
      const secondNum = b.token_id.slice(10, b.token_id.lastIndexOf("-"));
      return firstNum - secondNum;
    })
  
    setNftList(orderedBuyable);
  }, [])

  if (nftList.length === 0) return <p>Loading...</p>

  */
  return (
    <>
      {openGuestBook && ( <GuestBook openModal={openGuestBook} newAction={newAction} setOpenModal={setGuestBook} /> )}
      <ToastContainer position="bottom-right" autoClose={5000} />
        <TopMenu setShowWallet={setShowWallet} showWallet={showWallet} setGuestBook={setGuestBook} />
        <Logo />

        <main style={bgStyle}>
          {isMyNfts ? 
            <MyNFTs newAction={newAction} nftList={mockMyNFTlist} selected={selected} setSelected={setSelected} />
          : 
            <Landing newAction={newAction} nftList={mockNFTlist} selected={selected} setSelected={setSelected} />
          }
        </main>

        {(openGuestBook && <GuestBook 
          newAction={newAction}
          setOpenModal={setGuestBook}
        />)}

        <BottomMenu />
    </>
  )
}


const mockNFTlist = [
  {
    "token_id": "fono-root-0-2",
    "owner_id": "nft.soundsplash.near",
    "metadata": {
      "title": "A Song",
      "description": "This is a classic Rare Vandal beat from the early days of his beat making on the Roland W30. Original disk image could not be found.",
      "media": "QmXQx8HhofwhegdiUDkAv2XYuPoHsUpzC3a9JkTvacrkBz",
      "media_hash": "OTU3MGQ4NGNmZDYyYzBhZjA4ZTBjMjI2NjhiOTA5M2FkMDRjNjRiNTRiOTIxOGJmYTkxMjFhZDcxZWU5NDM3OQ==",
      "copies": null,
      "issued_at": 1651554206157,
      "expires_at": null,
      "starts_at": null,
      "updated_at": null,
      "extra": "{\"music_cid\":\"QmP3XqRibqLHEM9Qey4dkkfbcDdpWUQo4ShZ4kW4oN8s3w\",\"music_hash\":\"Mjk4ZGUyNWZhNjEwNjEzOGQ0NDc2MmY2Y2I1ZjY2NDVlMWE4YmM4NjdiYWEwYzlmNWNhNzdlYzI2ZjM5NmNiNA==\",\"parent\":\"fono-root-0-0\",\"instance_nounce\":0,\"generation\":3,\"original_price\":\"400000000000000000000000\"}",
      "reference": null,
      "reference_hash": null
    },
    "approved_account_ids": {},
    "royalty": {
      "vandal.near": 5000,
      "daorecords.near": 5000
    },
    "revenue": {
      "daorecords.near": 1000,
      "fono-root.optr.near": 9000
    }
  },
  {
    "token_id": "fono-root-1-0",
    "owner_id": "nft.soundsplash.near",
    "metadata": {
      "title": "Toronto",
      "description": "Respect The Architects\n\nMasia One x Janine Annice x Noyz134\n\nProduced by JCB\nEngineered by ALX\nArtwork by Noyz134\n\nWeek One of SoundSplash features \"Respect The Architects\" a global Hip Hop collaboration bringing together talents from Canada, Singapore, Malaysia, UK & Portugal.",
      "media": "QmcseQ65KWXmud2Lsj2fJgA3jVAagAqTQXo38ckrXZQpz3",
      "media_hash": "YjFjYmNjNGEzZWNjZDUxNWIyOGE0N2YyNWJmYjNmNDNhMGVhYmFlMjBiMjJhZTZlZmQxZTI5ZWNmODAwMmY3OA==",
      "copies": null,
      "issued_at": 1651671684623,
      "expires_at": null,
      "starts_at": null,
      "updated_at": null,
      "extra": "{\"music_cid\":\"QmNXBGdcNnqxoyJk96DNrJAcCUHbjMnRbhYnA28bC7yVa1\",\"music_hash\":\"NzBmMDE3NmViMjk3NWEyZmZmYTNiMWQ2ZTcxODI5MzI3Yjc2MTcwOWE1YzlmYjE4NGNhOGMyNjYzZDM3MmQxNQ==\",\"parent\":\"fono-root-1\",\"instance_nounce\":0,\"generation\":2,\"original_price\":\"2000000000000000000000000\"}",
      "reference": null,
      "reference_hash": null
    },
    "approved_account_ids": {},
    "royalty": {
      "daorecords.near": 1000,
      "fono-root.optr.near": 9000
    },
    "revenue": {
      "noyz134.near": 3800,
      "alxsounds.near": 500,
      "janineannice.near": 700,
      "daorecords.near": 2000,
      "jcb.near": 1500,
      "masiaone.near": 1500
    }
  },
  {
    "token_id": "fono-root-2-11",
    "owner_id": "nft.soundsplash.near",
    "metadata": {
      "title": "Great Escape",
      "description": "\"Respect the Architects\" is a bilingual boombap banger combining talents from Singapore, Malaysia, Canada, Portugal and UK and pays tribute to the visionaries that are building our creative futures. Originally put forward as an anthem for NxM, the collaboration grew as Singaporean-Canadian Hiphop emcee Masia One, Malaysian visual and recording artist Noyz134, UK's soul vocalist Janine Annice added their flavours to the raw hard hitting beat by Canada's JCB and mix and master from Portugal’s own ALX. The hand drawn artwork depicts a futuristic scene, both ominmous with watchful cameras and faceless structures, as well as hopeful as people band together to work toward another way. The message of digital art is clear: As we forge our way forward through innovation and creativity, we must take time to “Respect the Architects”.",
      "media": "QmcseQ65KWXmud2Lsj2fJgA3jVAagAqTQXo38ckrXZQpz3",
      "media_hash": "YjFjYmNjNGEzZWNjZDUxNWIyOGE0N2YyNWJmYjNmNDNhMGVhYmFlMjBiMjJhZTZlZmQxZTI5ZWNmODAwMmY3OA==",
      "copies": null,
      "issued_at": 1651673359508,
      "expires_at": null,
      "starts_at": null,
      "updated_at": null,
      "extra": "{\"music_cid\":\"QmNXBGdcNnqxoyJk96DNrJAcCUHbjMnRbhYnA28bC7yVa1\",\"music_hash\":\"NzBmMDE3NmViMjk3NWEyZmZmYTNiMWQ2ZTcxODI5MzI3Yjc2MTcwOWE1YzlmYjE4NGNhOGMyNjYzZDM3MmQxNQ==\",\"parent\":\"fono-root-2-4\",\"instance_nounce\":1,\"generation\":4,\"original_price\":\"2000000000000000000000000\"}",
      "reference": null,
      "reference_hash": null
    },
    "approved_account_ids": {},
    "royalty": {
      "daorecords.near": 1000,
      "fono-root.optr.near": 9000
    },
    "revenue": {
      "alxsounds.near": 500,
      "daorecords.near": 2000,
      "janineannice.near": 700,
      "jcb.near": 1500,
      "masiaone.near": 1500,
      "noyz134.near": 3800
    }
  },
  {
    "token_id": "fono-root-3-9",
    "owner_id": "nft.soundsplash.near",
    "metadata": {
      "title": "La La La",
      "description": "Put It On Me is a SterryO produced joint, inspired by how I made crypto my career. The blames I get for not being the random human anymore, because I now choose to make Metaverse my home. Stay ready and see y'all in the Metaverse. - Dedeukwu",
      "media": "QmXwrqaGFeqVBWxs4JsThGpium1TnDmi91vDgQBmqrhJN3",
      "media_hash": "OTQxODE3Y2MyMzVkYTFmYTQxM2I4YTY2Y2M5MjVjMjE1YTY5M2U4YjEzZTU0YWM2MjFhMzdjNmQ1NDUxMjA4ZQ==",
      "copies": null,
      "issued_at": 1652177864333,
      "expires_at": null,
      "starts_at": null,
      "updated_at": null,
      "extra": "{\"music_cid\":\"QmSuQL2QpQzxTkGk7W7LfpEoqz1UurXHidpffroYyiUeV5\",\"music_hash\":\"NTU5Nzc0YzlmOGZlYTA2MjI1MmRhMjBhYzM5NDY3ZTg5NTkyYTE5ODI2MDQwYTNhMjM5M2JhOGI4MDdlMzNiMA==\",\"parent\":\"fono-root-3-3\",\"instance_nounce\":0,\"generation\":4,\"original_price\":\"2000000000000000000000000\"}",
      "reference": null,
      "reference_hash": null
    },
    "approved_account_ids": {},
    "royalty": {
      "fono-root.optr.near": 9000,
      "daorecords.near": 1000
    },
    "revenue": {
      "daorecords.near": 2000,
      "dedeukwu.near": 8000
    }
  },
  {
    "token_id": "fono-root-4-9",
    "owner_id": "nft.soundsplash.near",
    "metadata": {
      "title": "Lion City",
      "description": "\"Multiverse\" is the lead single from Mantravine's upcoming album Asama.  Asama is a sanskrit word that means odd, and is symbolic of the odd time rhythms used in Mantravine's latest album. Multiverse uses psychedelic dance grooves, handpans, electrifying guitar, magical horn melodies, global percussions and forest sounds to weave into an enchanting emotional masterpiece.  \n\nFeatures: Muhammad Farhan (Keys, Trumpet), Isuru Wijesoma (Guitar), Eriko Murakami (Trombone) and Rupak George (Ableton).\nArtwork: Abhinav Tyagi",
      "media": "QmeEz18BY3StXnvBzxmVNmWj5aUsYh5YYyEvUNXepE1Qer",
      "media_hash": "OGY4NmQwNWMzODc1NzU3MmJmYzEwNzY1NjA0MDM0ZWE5ZTRiMjI5OTc0MWQyOTczOTExZjg5MGRkYTViYzQ2Yw==",
      "copies": null,
      "issued_at": 1652862907669,
      "expires_at": null,
      "starts_at": null,
      "updated_at": null,
      "extra": "{\"music_cid\":\"QmPL2jQosyQ25YCdjv5KwqmZK7rFpdAW8bfwgtCmgAkc2C\",\"music_hash\":\"ZWY2ZjQ5OTkxMmJhZDk4YjI2YjViZTRmYTIwYWZlMjJiNDI1MjliZjEwMWYzYTQwOTJlMmMyMDQzZjdmM2U4ZQ==\",\"parent\":\"fono-root-4-3\",\"instance_nounce\":0,\"generation\":4,\"original_price\":\"2000000000000000000000000\"}",
      "reference": null,
      "reference_hash": null
    },
    "approved_account_ids": {},
    "royalty": {
      "fono-root.optr.near": 9000,
      "daorecords.near": 1000
    },
    "revenue": {
      "mantravine.near": 3400,
      "farhanremy.near": 1700,
      "781443edb4ee2ea3bce333f2fe2fe4e597c58ee050eb9e97f0a5b8d21c33bf9e": 1700,
      "izzyroo.near": 1700,
      "adelinethc.near": 1500
    }
  },
  {
    "token_id": "fono-root-5-13",
    "owner_id": "nft.soundsplash.near",
    "metadata": {
      "title": "Steet Food",
      "description": "COMA-CHI, one of Japan's most respected MC/singers teams up with indie music producer/MC and cultural ambassador MeccaGodZilla of NYC to bring you a hardcore trap inspired banger as a reminder and warning to simply \"Watch Your Mouth!\" \nAs a featured single on the \"Spiritual Bitch EP,\"  \"Watch Your Mouth\" is 1 of 3 songs that explores COMA-CHI's diversity as a singer/MC that continues to evolve both lyrically and spiritually.  Backed by Mecca's cinematic production style, these 2 international Hip-Hop cultural collaborators look forward to releasing a lot more music in the metaverse.",
      "media": "Qmb3daz5FsEKx43aoVGheic8U8sUa8mbFP3B8Qo9H9Ghuf",
      "media_hash": "M2VhYzI5ZjgzNTllNzgwZmU3N2U3OTZmM2YyZjYzOWQzN2ZmOTQ0MTM1ZGVmYmRhZTMzNTc4ODEzOTVhMTM2YQ==",
      "copies": null,
      "issued_at": 1653475092136,
      "expires_at": null,
      "starts_at": null,
      "updated_at": null,
      "extra": "{\"music_cid\":\"QmSvycbSubsTaFVnDGVfj58ziyxhbWchxUoQHz4LKC3sKR\",\"music_hash\":\"MzY3ZTIwNjg2ODhkYmYwMjRlMDUyYzQzYmQyNTM5YmRkZjg2MjA0ZTc1ZTdlMTcxY2NjMWU5ODM3OTViYzE5Yw==\",\"parent\":\"fono-root-5-5\",\"instance_nounce\":1,\"generation\":4,\"original_price\":\"2000000000000000000000000\"}",
      "reference": null,
      "reference_hash": null
    },
    "approved_account_ids": {},
    "royalty": {
      "daorecords.near": 1000,
      "fono-root.optr.near": 9000
    },
    "revenue": {
      "daorecords.near": 2000,
      "mecca-godzilla.near": 4000,
      "coma-chi.near": 4000
    }
  },
  {
    "token_id": "fono-root-6-15",
    "owner_id": "nft.soundsplash.near",
    "metadata": {
      "title": "Dusty Wonton",
      "description": "Spacesuit Apocalypse brings together the lyrical prowess of the Rare Vandal and the musical madness of DJ Lethal Skillz. Showcasing the attributes of a high ranking NearNaut, this NFT-themed collaboration represents a new generation of Web3 Hip Hop that stays true to its roots. Did you find the Easter Egg?\n",
      "media": "Qmc4HDFzwzT8rbgVAHpYFoyjuv2sgM19NrByVxehCwgnHY",
      "media_hash": "ZjFkYmUwM2EyYzM1YWUwMjY4ZTVlZDg5ODQzNmZjNDk5MjkxNTRkZDQwZmNlOGM4YWNlMzdmNzU5MjI2OTQxNQ==",
      "copies": null,
      "issued_at": 1654678170813,
      "expires_at": null,
      "starts_at": null,
      "updated_at": null,
      "extra": "{\"music_cid\":\"QmW8ooTrAXnkVpXvqGCxQVgLEQz6bmfN34tzG1gsUMZPau\",\"music_hash\":\"NmE5ZmNmNDUyZTM0N2NmNjVjYzdlYTEwNTMwYmI5NTlmYWQ5ZjY0ZDJhOTZhZmFlNzE4Mjc4YWRmYmFmYjA1Mw==\",\"parent\":\"fono-root-6-6\",\"instance_nounce\":0,\"generation\":5,\"original_price\":\"2000000000000000000000000\"}",
      "reference": null,
      "reference_hash": null
    },
    "approved_account_ids": {},
    "royalty": {
      "fono-root.optr.near": 9000,
      "daorecords.near": 1000
    },
    "revenue": {
      "vandal.near": 4000,
      "daorecords.near": 2000,
      "djlethalskillz.near": 4000
    }
  },
  {
    "token_id": "fono-root-7-10",
    "owner_id": "nft.soundsplash.near",
    "metadata": {
      "title": "Home",
      "description": "“Home” 《家》is the first song on Supa Mojo’s three-song EP “Home Will Dream”《家想梦》produced by Dae Kim. She shares sentiments around leaving home, dealing with the grief of losing her brother, the process of healing (remove-and the return home).",
      "media": "QmXdNzYV2PJCQPoK29Z1XrXfuUsci3qU5N4ms5GvtGKWb8",
      "media_hash": "NWRjMjNmNWYyMTM0MzY3ZmE3NTJiMjczNDI5MjMyZDY2YTk5ZThjNzVkODIzZDg0MWQ1ZWVjMTcwMjQxODg1YQ==",
      "copies": null,
      "issued_at": 1655274203544,
      "expires_at": null,
      "starts_at": null,
      "updated_at": null,
      "extra": "{\"music_cid\":\"QmWkfqsb2aQP5cnPE3rFML8KvNuGPceJqpLvAiTuxQHZdU\",\"music_hash\":\"YzUwNDdlMTEyY2QxMWRjNTdjYjExODY5ZTVmZjBkYmYyY2FhZTA4NWQxM2M1ZDU5NjEzMGVhMjBhNDc3YTAzOA==\",\"parent\":\"fono-root-7-4\",\"instance_nounce\":1,\"generation\":4,\"original_price\":\"2000000000000000000000000\"}",
      "reference": null,
      "reference_hash": null
    },
    "approved_account_ids": {},
    "royalty": {
      "nft.soundsplash.near": 9000,
      "daorecords.near": 1000
    },
    "revenue": {
      "daorecords.near": 2000,
      "supamojo.near": 3000,
      "noyz134.near": 2000,
      "daekim.near": 3000
    }
  },
  {
    "token_id": "fono-root-8-7",
    "owner_id": "nft.soundsplash.near",
    "metadata": {
      "title": "KLX",
      "description": "The Blood Moon is upon us, in an epic tale between good and evil.  Trinidadian artist Blufyah describes the noble hunter destroying the vampires, werewolves and wickedness in the world. Producer JahWise creates a bass heavy soundscape, laced with live drums to make this NFT a unique collectable for the Roots Reggae lover.",
      "media": "QmSj1rvESFz96FabomnQvjZGeTNyv5RmmcxzN6nUp9jbAG",
      "media_hash": "Y2Y5NmExODNkN2EwMDE5NTY1YjhlODA5ZDM2YWVhZjYyZWJiYjMyNDFkZjc5ZmI1MTRjMjE0MDA3OWI2NTlmOA==",
      "copies": null,
      "issued_at": 1655912485634,
      "expires_at": null,
      "starts_at": null,
      "updated_at": null,
      "extra": "{\"music_cid\":\"QmU924tpPAK1tkWDEfmgg8xkHWDJTktY6GP5SfcbVYE23E\",\"music_hash\":\"YjZmODczYjM4OGZjZjllZThjNjgzMjQ4YjA5NjFhMTg1NDE5ZDYyZWY1NWI3NWQwY2M5NzFlZTA5ZGIxMDJmYw==\",\"parent\":\"fono-root-8-2\",\"instance_nounce\":0,\"generation\":4,\"original_price\":\"2000000000000000000000000\"}",
      "reference": null,
      "reference_hash": null
    },
    "approved_account_ids": {},
    "royalty": {
      "daorecords.near": 1000,
      "nft.soundsplash.near": 9000
    },
    "revenue": {
      "jahwise.near": 4000,
      "blufyah.near": 4000,
      "daorecords": 2000
    }
  },
  {
    "token_id": "fono-root-9-5",
    "owner_id": "nft.soundsplash.near",
    "metadata": {
      "title": "Chameleon",
      "description": "KlapYaHandz Cambodian artist Vin Vitou would like to share that no matter how successful you are, you should not look down on people who are trying to achieve their goal. His \"Hercules\" NFT embodies the spirit of elevating beyond being judgmental of others, and remembering we all had to start at the bottom once, and must empower one another.",
      "media": "QmZFUsFsVKRwe4ckiuGxmwkmSSTzdThmkZCwSxEfZNtU6c",
      "media_hash": "ODdmYWQ0ZWZlOGIzNDNmMTkwZDUzYTZjMzMzYTdmYzU2YTc0MjU5N2Q2ODdjNTAzODhjM2MyOTVmNTg4ODY4MA==",
      "copies": null,
      "issued_at": 1656495885678,
      "expires_at": null,
      "starts_at": null,
      "updated_at": null,
      "extra": "{\"music_cid\":\"QmQsxT7YyeqL9oBxkz9HUK4Febs4rzYsStZMnvEoUG5HsV\",\"music_hash\":\"MjBlY2VjMWFkZTc1ZDkzYTM4NzU3YWI3NGE4YTk5NTU0MDBlNzAwZTA1MDU5NzI0NDJlZDhiMzljZjk1ZWUyMw==\",\"parent\":\"fono-root-9-1\",\"instance_nounce\":1,\"generation\":3,\"original_price\":\"2000000000000000000000000\"}",
      "reference": null,
      "reference_hash": null
    },
    "approved_account_ids": {},
    "royalty": {
      "daorecords.near": 1000,
      "nft.soundsplash.near": 9000
    },
    "revenue": {
      "daorecords.near": 2000,
      "klapyahandz.near": 8000
    }
  },
  {
    "token_id": "fono-root-10-4",
    "owner_id": "nft.soundsplash.near",
    "metadata": {
      "title": "GLS",
      "description": "Clorofila En Tinta represents dignified life in all its expressions, putting together native stories immersed in family vibes. We made this song during a difficult situation in Venezuela, due to high levels of political and social violence, so with our music we hope to contribute to the encounter between the same people through what everyone can contribute positively to the community both in Venezuela and globally.",
      "media": "Qmbc2a7fLMnM5keDA11XJhoF3n1RhQFE8P4P4FAoL61CVU",
      "media_hash": "ODM3NWQ4MDY4MDE1MmExNzljYTAyZTFjYjU0MTQ5OGM3NjAwN2M2ZDZkMjQ4OWY1MmNlMjExMmRmMDQ0OWQ2NQ==",
      "copies": null,
      "issued_at": 1657120324421,
      "expires_at": null,
      "starts_at": null,
      "updated_at": null,
      "extra": "{\"music_cid\":\"QmSEjkpuF3FTfwdgpyqBeJwGBQuoV6oXMCtK3uQx5CyHoV\",\"music_hash\":\"YWM0ODBmMjMzMDVkMmJjNjRmZTg0YWEzNjEyMjMwYTJmM2UzNTJhNWYzMDIxZmEwNWI2NWNmOTczOGViOWY0OQ==\",\"parent\":\"fono-root-10-1\",\"instance_nounce\":1,\"generation\":3,\"original_price\":\"2000000000000000000000000\"}",
      "reference": null,
      "reference_hash": null
    },
    "approved_account_ids": {},
    "royalty": {
      "daorecords.near": 1000,
      "nft.soundsplash.near": 9000
    },
    "revenue": {
      "daorecords.near": 2000,
      "versopesado.near": 8000
    }
  },
  {
    "token_id": "fono-root-11-4",
    "owner_id": "nft.soundsplash.near",
    "metadata": {
      "title": "Essence",
      "description": "When you flex your skills with attitude and style you know that you're a BAD... Produced by JCB and Blake Harden BAD is penned and rapped by Nigerian emcee Reespect, showcasing her lyrical prowess and wordsmithery on a song re-created just for SoundSplash!",
      "media": "QmbDkMYRMKbarBZEaqNaxNqoHAPbvWzTwLknix2vfEyv4M",
      "media_hash": "NTBjZGRjNWVkODBjODQ3OGY3ODQ1ZGZiZDBhNjg5ODNlYmM0NzI3MTM3ZGRlY2RjNTQzNzM3NTUzMTMxZGM2MA==",
      "copies": null,
      "issued_at": 1657718184384,
      "expires_at": null,
      "starts_at": null,
      "updated_at": null,
      "extra": "{\"music_cid\":\"QmSaZzB9QtrL2icViDTmiAxzxALNnMx3GvUhymuXQf55DT\",\"music_hash\":\"ZWIwYzU4Mjk2YzY4YWZiYmE0OTQ3NDA2ODA3MTIxZmRlNzljYjE3OWI5Njc5NjZhMmE5YzlhMjJjNWE5YmQ1ZA==\",\"parent\":\"fono-root-11-1\",\"instance_nounce\":1,\"generation\":3,\"original_price\":\"2000000000000000000000000\"}",
      "reference": null,
      "reference_hash": null
    },
    "approved_account_ids": {},
    "royalty": {
      "daorecords.near": 1000,
      "nft.soundsplash.near": 9000
    },
    "revenue": {
      "daorecords.near": 2000,
      "blakeblizzy.near": 2000,
      "ayonete.near": 1000,
      "jcb.near": 2000,
      "reespect.near": 3000
    }
  },
  {
    "token_id": "fono-root-12-4",
    "owner_id": "nft.soundsplash.near",
    "metadata": {
      "title": "Mongolia",
      "description": "This is a song about being late again.....again.  Loosely based on an old Oddities jam from 2003, it's evident that in the past 20 years not much has changed for davepsy. Alarm clocks are his apparent kryptonite. Rapping about them helps, if only slightly. Nineteen Ninety Nix (Circle Research) ties the sound all the way together with the requisite beats, bleeps and boops that he does so well. We put the fun in frustration. (it's not....there?) We misplaced the fun in frustration.",
      "media": "QmXiQs5AqmF6TgvdrMFjt4C4dxRa2SbEWf6wfTXzb3XVzW",
      "media_hash": "MDM4N2VhZDMwNjg4OGIzYjg3NjNkYmI4YThmMjBhMzk4ZGRmZTc4ZDEyNWE4OGZlYTA4YzRiZTUwYTg1OTk5ZA==",
      "copies": null,
      "issued_at": 1658327660157,
      "expires_at": null,
      "starts_at": null,
      "updated_at": null,
      "extra": "{\"music_cid\":\"QmfEBv15kAa4FbTSbyLAHX6ih5W2fnRh44tHza36gnpmZr\",\"music_hash\":\"OGE5Mzg0OTA5YTAyYTg3OGM5Yzk1OTA1YjgyOGQwYjdmN2NmNjc0N2NhMGE0N2YxMmIwMmFiNGUwNTBjODBkMw==\",\"parent\":\"fono-root-12-1\",\"instance_nounce\":1,\"generation\":3,\"original_price\":\"2000000000000000000000000\"}",
      "reference": null,
      "reference_hash": null
    },
    "approved_account_ids": {},
    "royalty": {
      "daorecords.near": 1000,
      "nft.soundsplash.near": 9000
    },
    "revenue": {
      "daorecords.near": 2000,
      "davepsy.near": 4000,
      "nineteenninetynix.near": 4000
    }
  },
  {
    "token_id": "fono-root-13-2",
    "owner_id": "nft.soundsplash.near",
    "metadata": {
      "title": "Effected",
      "description": "Positive Energy is exactly what we need in these times and Indonesia's ambassador of Reggae, Ras Muhamad is here to spread the good vibes alongside producer Wizzow.  This \"Positive Energy\" NFT shares a message that negativity must be removed by positive thoughts and action, as expressed in Ras' lyric, \"I rather hold a friendship than keep man an enemy\".  \n\nThe live electric guitars solo performed by Ras Muhamad meld perfectly with the backbeat from Wizzow, a well respected producer and active council member for Beat DAO & Svara DAO. \"Positive Energy\" is a gem to be listened to and owned, celebrating the universal expression of love at the heart of Reggae music.",
      "media": "Qmf4VQp1heabJi7e8CmCJC63hKyHTr13Yy5UQaweApD5pw",
      "media_hash": "NDk2MTkyMjU4M2NiYzYwNjBmOGY1NDlmZDVlNjE2MDUzMjZiMDVlZjAxM2I2ZTRlZDc2NDM2Yjg1OWUxNDkwZA==",
      "copies": null,
      "issued_at": 1658915521733,
      "expires_at": null,
      "starts_at": null,
      "updated_at": null,
      "extra": "{\"music_cid\":\"Qmefbyvz1idBo7ZMELmLcRFzLw7UQqDABw7epoPgTtg7HH\",\"music_hash\":\"MGIyYzIwODBhNWEwZWQ2Y2QzY2RhZTFmYTQxNjVkYTI0NDkzZjNlMGNmMWYzMzc4M2VmZTMxODhiM2JlY2FlZA==\",\"parent\":\"fono-root-13-0\",\"instance_nounce\":0,\"generation\":3,\"original_price\":\"2000000000000000000000000\"}",
      "reference": null,
      "reference_hash": null
    },
    "approved_account_ids": {},
    "royalty": {
      "nft.soundsplash.near": 9000,
      "daorecords.near": 1000
    },
    "revenue": {
      "rasmuhamad.near": 4000,
      "wizzow.near": 4000,
      "daorecords.near": 2000
    }
  }
]


const mockMyNFTlist = [
  {
    "token_id": "fono-root-6-15",
    "owner_id": "nft.soundsplash.near",
    "metadata": {
      "title": "Spacesuit Apocalypse",
      "description": "Spacesuit Apocalypse brings together the lyrical prowess of the Rare Vandal and the musical madness of DJ Lethal Skillz. Showcasing the attributes of a high ranking NearNaut, this NFT-themed collaboration represents a new generation of Web3 Hip Hop that stays true to its roots. Did you find the Easter Egg?\n",
      "media": "Qmc4HDFzwzT8rbgVAHpYFoyjuv2sgM19NrByVxehCwgnHY",
      "media_hash": "ZjFkYmUwM2EyYzM1YWUwMjY4ZTVlZDg5ODQzNmZjNDk5MjkxNTRkZDQwZmNlOGM4YWNlMzdmNzU5MjI2OTQxNQ==",
      "copies": null,
      "issued_at": 1654678170813,
      "expires_at": null,
      "starts_at": null,
      "updated_at": null,
      "extra": "{\"music_cid\":\"QmW8ooTrAXnkVpXvqGCxQVgLEQz6bmfN34tzG1gsUMZPau\",\"music_hash\":\"NmE5ZmNmNDUyZTM0N2NmNjVjYzdlYTEwNTMwYmI5NTlmYWQ5ZjY0ZDJhOTZhZmFlNzE4Mjc4YWRmYmFmYjA1Mw==\",\"parent\":\"fono-root-6-6\",\"instance_nounce\":0,\"generation\":5,\"original_price\":\"2000000000000000000000000\"}",
      "reference": null,
      "reference_hash": null
    },
    "approved_account_ids": {},
    "royalty": {
      "fono-root.optr.near": 9000,
      "daorecords.near": 1000
    },
    "revenue": {
      "vandal.near": 4000,
      "daorecords.near": 2000,
      "djlethalskillz.near": 4000
    }
  },
  {
    "token_id": "fono-root-10-4",
    "owner_id": "nft.soundsplash.near",
    "metadata": {
      "title": "Clorofila En Tinta",
      "description": "Clorofila En Tinta represents dignified life in all its expressions, putting together native stories immersed in family vibes. We made this song during a difficult situation in Venezuela, due to high levels of political and social violence, so with our music we hope to contribute to the encounter between the same people through what everyone can contribute positively to the community both in Venezuela and globally.",
      "media": "Qmbc2a7fLMnM5keDA11XJhoF3n1RhQFE8P4P4FAoL61CVU",
      "media_hash": "ODM3NWQ4MDY4MDE1MmExNzljYTAyZTFjYjU0MTQ5OGM3NjAwN2M2ZDZkMjQ4OWY1MmNlMjExMmRmMDQ0OWQ2NQ==",
      "copies": null,
      "issued_at": 1657120324421,
      "expires_at": null,
      "starts_at": null,
      "updated_at": null,
      "extra": "{\"music_cid\":\"QmSEjkpuF3FTfwdgpyqBeJwGBQuoV6oXMCtK3uQx5CyHoV\",\"music_hash\":\"YWM0ODBmMjMzMDVkMmJjNjRmZTg0YWEzNjEyMjMwYTJmM2UzNTJhNWYzMDIxZmEwNWI2NWNmOTczOGViOWY0OQ==\",\"parent\":\"fono-root-10-1\",\"instance_nounce\":1,\"generation\":3,\"original_price\":\"2000000000000000000000000\"}",
      "reference": null,
      "reference_hash": null
    },
    "approved_account_ids": {},
    "royalty": {
      "daorecords.near": 1000,
      "nft.soundsplash.near": 9000
    },
    "revenue": {
      "daorecords.near": 2000,
      "versopesado.near": 8000
    }
  },
];