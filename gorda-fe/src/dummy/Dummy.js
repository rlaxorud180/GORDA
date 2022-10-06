import { postFoundation } from "../api/Foundation";
import { signIn } from "../api/Users";
import { postCompany } from "../api/Company";
import { postBadge } from "../api/Badge";
// import { postDonation } from "../api/Donation";
// import { postComment } from "../api/Comment";
// import DonationCommentData from "./DonationCommentData";
// import DonationData from "./DonationData";
import BadgeData from "./BadgeData";
import UserData from "./UserData";
import FoundationData from "./FoundationData";
import CompanyData from "./CompanyData";

export const UserDummy = async () => {
    await UserData.map((value, key) => {
        console.log("밸류값", value);
        signIn(value,
            (response) => {
            },
            (err) => {
                console.log("실패", err);
            }
        )
    })
    // for(let i= 0; i < UserData.length; i++) {
    //     await signIn(UserData[i],
    //     (response) => {
    //         console.log("성공", response);
    //     },
    //     (err) => {
    //         console.log("에러 발생", err);
    //     })
    // }
}

export const FoundationDummy = async() => {
    await FoundationData.map((value, key) => {
        console.log("밸류값", value);
        postFoundation(value,
            (response) => {
            },
            (err) => {
                console.log("실패", err);
            }
        )
    })
}

// export const DonationDummy = async() => {
//     for(let i= 0; i < DonationData.length; i++) {
//         await postDonation(DonationData[i],
//         (response) => {
//             console.log("성공", response);
//         },
//         (err) => {
//             console.log("에러 발생", err);
//         })
//     }
// }

// export const DonationCommentDummy = async() => {
//     for(let i= 0; i < DonationCommentData.length; i++) {
//         await postComment(DonationCommentData[i],
//         (response) => {
//             console.log("성공", response);
//         },
//         (err) => {
//             console.log("에러 발생", err);
//         })
//     }
// }

export const BadgeDummy = async() => {
    await BadgeData.map((value, key) => {
        console.log("밸류값", value);
        postBadge(value,
            (response) => {
            },
            (err) => {
                console.log("실패", err);
            }
        )
    })
}

export const CompanyDummy = async () => {
    await CompanyData.map((value, key) => {
        console.log("밸류값", value);
        postCompany(value,
            (response) => {
            },
            (err) => {
                console.log("실패", err);
            }
        )
    })
}