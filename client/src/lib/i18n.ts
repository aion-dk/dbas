import { createI18n } from "vue-i18n";
import { nextTick } from "vue";
import type { Locale } from "../Types";

let locale = "en";
const url = new URL(window.location.href);
if (url.pathname.split("/")[1]) locale = url.pathname.split("/")[1];

const i18n = createI18n({
  locale: locale,
  fallbackLocale: "en",
  messages: {
    en: {
      locales: {
        en: "English",
        de: "Deutsch",
        da: "Dansk",
        es: "Espanõl",
      },
      errors: {
        verify: {
          invalid_code: {
            title: "Invalid verification code",
            description:
              "The verification code does not exist in this election. Please try voting again, or contact the election officials for further help.",
          },
        },
        track: {
          invalid_code: {
            title: "Invalid tracking code",
            description:
              "Please check that the tracking code was entered correctly. The code is case sensitive. If you are checking to make sure your ballot was recorded correctly before submitting, use the ballot check site instead. Still having problems? Contact your local election official.",
          },
        },
      },
      header: {
        dbas: "Digital Ballot Audit Site",
        about: "About",
        logs: "Logs",
        help: "Help",
        contact: "Contact",
        change_locale: {
          en: "Switch to English",
          es: "Cambiar a Español",
        },
      },
      components: {
        item_identifier: {
          tooltip: "Click to copy",
          copied: "Copied",
        },
        board_item: {
          info: "What does this mean?",
          expand: "Click to read more",
          collapse: "Click to read less",
          SegmentsConfigItem: {
            type: "Segments configured",
            author: "Election Official",
            info: "The election official has configured the segments that is publicized about the voters.",
          },
          SpoilRequestItem: {
            type: "Spoil Request",
            author: "Voter",
            info: "A voter has tested his vote to verify the integrity of the system.",
          },
          SessionExpiryItem: {
            type: "Explicit Session Expiry",
            author: "Voter",
            info: "A session has explicitly been expired.",
          },
          ExtractionDataItem: {
            type: "Extracted votes",
            author: "Election Official",
            info: "Extracted and decrypted votes.",
          },
          ExtractionConfirmationItem: {
            type: "Extraction confirmation",
            author: "Trustees",
            info: "Confirmation item indicating that the Trustees decrypted the votes in the previous extraction intent item.",
          },
          ExtractionIntentItem: {
            type: "Extraction intent",
            author: "Election Official",
            info: "Election official intents to extract and decrypt votes. Following items will confirm if this has happened successfully.",
          },
          AffidavitRejectItem: {
            type: "Rejected affidavit",
            author: "Election Official",
            info: "An affidavit has been rejected",
          },
          AffidavitAcceptItem: {
            type: "Accepted affidavit",
            author: "Election Official",
            info: "An affidavit has been accepted",
          },
          GenesisItem: {
            type: "Genesis item",
            author: "Election Official",
            info: "The election has been created",
          },
          VoterAuthorizationConfigItem: {
            type: "Voter authorization config",
            author: "Election Official",
            info: "Voter authorization has been configured",
          },
          ContestConfigItem: {
            type: "Contest config",
            author: "Election Official",
            info: "Contest information has been updated",
          },
          VotingRoundConfigItem: {
            type: "Voting round config",
            author: "Election Official",
            info: "A voting round has been configured",
          },
          BallotConfigItem: {
            type: "Ballot config",
            author: "Election Official",
            info: "Ballot information has been updated",
          },
          ElectionConfigItem: {
            type: "Election config",
            author: "Election Official",
            info: "The election information has been updated",
          },
          ThresholdConfigItem: {
            type: "Ballot encryption key",
            author: "Trustee",
            info: "Ballot encryption key has been generated",
            encryption_key: "Ballot encryption key identifier is:",
          },
          CastRequestItem: {
            type: "Ballot cast",
            author: "Voter",
            info: "A ballot has been cast and received",
          },
          VoterSessionItem: {
            type: "Voter session",
            author: "Voter",
            info: "A voter has authenticated",
          },
          BallotCryptogramsItem: {
            type: "Ballot cryptogram",
            author: "Voter",
            info: "Voter and Digital Ballot Box have exchanged cryptographic information establishing trust.",
          },
          BoardEncryptionCommitmentItem: {
            type: "Encryption commitment",
            author: "Digital Ballot Box",
            info: "Voter and Digital Ballot Box have exchanged cryptographic information establishing trust.",
          },
          VoterEncryptionCommitmentItem: {
            type: "Encryption commitment",
            author: "Voter",
            info: "Voter and Digital Ballot Box have exchanged cryptographic information establishing trust.",
          },
        },
        ballot_activity_list: {
          title: "Activity connected to the tracking code",
          type: "Activity type",
          time: "Date and time",
          actor: "Actor",
          identifier: "Identifier",
        },
        ballot_activity: {
          registered_at: "Registered at",
          author: "Author {author}",
          meaning: "What does this mean?",
          AffidavitRejectItem: {
            type: "Affidavit Rejected",
            author: "Election Official",
            details:
              "Your affidavit has been rejected. Please contact your Election Officials office to cure your affidavit.",
          },
          SpoilRequestItem: {
            type: "Spoil Request",
            author: "You",
            details: "You have challenged the integrity of the voting system and performed the Benaloh challenge.",
          },
          SessionExpiryItem: {
            type: "Explicit Session Expiry",
            author: "You",
            details: "You have explicitly expired your voter session.",
          },
          AffidavitAcceptItem: {
            type: "Affidavit Accepted",
            author: "Election Official",
            details:
              "Your affidavit has been accepted. A new item will appear here when it has been extracted for tallying.",
          },
          CastRequestItem: {
            type: "Ballot Cast",
            author: "You",
            details: "Your ballot has been received.",
          },
          VoterSessionItem: {
            type: "Sign in",
            author: "You",
            details: "You have authenticated your self and signed in.",
          },
        },
      },
      views: {
        verifier: {
          found: {
            title: "Your ballot has been found!",
            description:
              "Go back to the voting app and follow the instructions there to continue the ballot test.",
          },
          inprogress: {
            title: "Pairing code",
            info: "Go to the voting application and confirm this pairing code match the one displayed there. Then follow the instructions in the voting application.",
          },
          spoiled: {
            title: "Your vote has been opened",
            description:
              "Below you will find your decrypted vote, with its contents revealed for you to verify. If they do not match your cast intention, please contact an election official.",
          },
          blank_pile: "Blank",
        },
        help: {
          title: "Help Using the Ballot Tracker",
          info: "Have questions? We are here to help.",
        },
        logs: {
          title: "Election Logs",
          intro:
            "These are all the election events in reverse chronological order. This allows you to publicly audit the election.",
          download_button: "Download the full election activity log (json)",
          config_only: "Configuration items only?",
        },
        tracker: {
          currently_tracking: "You are currently tracking",
          cancel_cross_label: "Cancel tracking {trackingCode}",
          info: {
            title: "Ballot found",
            description:
              "See the status of your ballot below. You can also see all activity connected to your ballot tracking code.",
          },
          status_map: {
            pending: {
              title: "Ballot received",
              description:
                "Your ballot package has been received. Check back to verify that your ballot was accepted for counting.",
            },
            accepted: {
              title: "Ballot accepted",
              description:
                "Your signature affidavit has been verified and your ballot is accepted for counting.",
            },
            rejected: {
              title: "Ballot not accepted",
              description:
                "There is a problem with your signature affidavit. Contact your local election official for next steps and to cure your affidavit.",
            },
            extracted: {
              title: "Ballot decrypted for tallying",
              description:
                "Your ballot has been extracted from the digital ballot box and decrypted offline. It has been printed onto a paper ballot for scanning and tabulation with other absentee ballots.",
            },
          },
        },
        welcome: {
          footer: "Did you mean Ballot Check instead?",
          footer_tooltip:
            "A ballot check is performed before you submit your ballot. It enables you to confirm your ballot was recorded and encrypted correctly.",
          locate_tracking_code: "Where do I find my tracking code?",
          locate_tracking_code_tooltip:
            "Your ballot tracking code was displayed in the VoteHub app after you submitted your ballot. It was also sent to the email address in your voter registration record. Can't find your code? You can re-open the VoteHub app and enter your identifying information to retrieve the Tracking Code.",
          locate_verification_code: "Where do I find my verification code?",
          locate_verification_code_tooltip:
            "Your verification code was displayed in the VoteHub app after you submitted your ballot. It was also sent to the email address in your voter registration record.",
          track_ballot_button: "Track my ballot",
          tracking_code_input: "Ballot tracking code",
          initiate_verification_button: "Verify my ballot",
          verification_code_input: "Verification code",
          verify: {
            header: "Verify my ballot",
            p1: "I want to verify that my vote is intact and unchanged",
            p2: "I have a verification code, and I want to ensure that my digital vote has not been altered while in transit",
          },
          about: {
            header: "Ballot tracker",
            p1: "I have voted and I want to track my ballot.",
            p2: "To check the status of your ballot, you need to input the tracking code from the Voter receipt.",
          },
        },
      },
    },
    es: {
      header: {
        dbas: "Digital Ballot Audit Site",
        about: "Información",
        logs: "Registros",
        help: "Ayuda",
        contact: "Contacto",
      },
    },
  },
  datetimeFormats: {
    en: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      long: {
        year: "numeric",
        month: "short",
        day: "numeric",
        weekday: "short",
        hour: "numeric",
        minute: "numeric",
      },
    },
    da: {
      short: {
        year: "numeric",
        day: "numeric",
      },
      long: {
        year: "numeric",
        month: "short",
        day: "numeric",
        weekday: "short",
        hour: "numeric",
        minute: "numeric",
      },
    },
  },
});

export function setLocale(locale: Locale) {
  i18n.global.locale = locale as Locale;
}

export function loadLocaleMessages(locale: string, messages: object) {
  i18n.global.setLocaleMessage(locale, messages as any);

  return nextTick();
}

export default i18n;
