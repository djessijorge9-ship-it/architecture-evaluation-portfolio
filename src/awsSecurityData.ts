export const AWS_SECURITY_PROGRAMME = {
  "title": "AWS Security Engineer Advanced",
  "provider": "Amazon Web Services on Coursera",
  "completed": "9 November 2026",
  "courses": 18,
  "grade": "100% recorded in all 18 courses",
  "url": "https://www.coursera.org/account/accomplishments/specialization/JWB4H05JGSK2",
  "scope": "Programme completion does not establish passing the separate AWS Certified Security – Specialty examination."
};

export const AWS_SECURITY_CASES = [
  {
    "id": "aws-iam",
    "title": "Troubleshooting IAM role access",
    "shortTitle": "IAM role access",
    "courseId": "C06",
    "summary": "Guided IAM trust-policy correction and supplied-policy attachment, with a successful console role switch.",
    "problem": "The course scenario required the intended operator user to assume a specific role without broadening access to other roles. Both the user's identity permission and the role's trust relationship needed to match the supplied requirement.",
    "objectives": [
      "Select the supplied policy scoped to the intended role rather than the wildcard or incorrectly cased alternatives.",
      "Allow the intended user principal in the role trust relationship.",
      "Verify console role assumption using the intended user identity."
    ],
    "attribution": "Guided, AI-assisted practical work under Djessi Jorge’s direction and approvals using course-provided IAM policies and infrastructure. Djessi supplied screenshots and completed operator-user sign-in; the coding assistant performed the documented console changes.",
    "implementation": [
      "Attached a course-supplied identity policy; the console confirmed one policy added.",
      "Updated role trust to the intended user principal with sts:AssumeRole; the console confirmed the trust-policy update.",
      "Verified the console header displaying the intended assumed-role identity after Djessi’s manual operator-user sign-in."
    ],
    "validation": [
      {
        "check": "Role trust",
        "expected": "Allow the intended user principal to request sts:AssumeRole.",
        "observed": "Trust JSON shows the intended user principal and sts:AssumeRole, alongside the update confirmation."
      },
      {
        "check": "Supplied-policy attachment",
        "expected": "Record the supplied-policy attachment step.",
        "observed": "The console confirms one policy added."
      },
      {
        "check": "Console role assumption",
        "expected": "Switch from the intended user to the intended role.",
        "observed": "The console header displays the intended assumed-role identity. This validates console role assumption only."
      }
    ],
    "challenges": [
      {
        "issue": "An authentication-failed screen occurred during the operator-user sign-in workflow.",
        "handling": "Djessi completed manual sign-in before the successful console role-switch check."
      }
    ],
    "takeaways": [
      {
        "text": "Identity permission and role trust need to be evaluated together when diagnosing role assumption.",
        "basis": "Technical inference"
      },
      {
        "text": "A successful console role switch establishes assumption, not that every downstream operation is authorised.",
        "basis": "Technical inference"
      }
    ],
    "improvements": [
      {
        "text": "Retain before-and-after identity-policy and trust-policy exports.",
        "status": "Proposed — not completed"
      },
      {
        "text": "Capture the successful CloudTrail AssumeRole event or equivalent STS output.",
        "status": "Proposed — not completed"
      },
      {
        "text": "Add a separately scoped downstream permissions test for the required service operation.",
        "status": "Proposed — not completed"
      }
    ],
    "resultLabel": "Console role assumption verified",
    "criticalCaveat": "Validated outcome: console role assumption only.",
    "code": "AWS-01",
    "certificateUrl": "https://www.coursera.org/account/accomplishments/certificate/U5VD2ZTKBY76",
    "sourceReferences": [
      {
        "id": "IAM-R01",
        "label": "Role trust after-state",
        "type": "Direct screenshot",
        "claim": "Shows intended user principal, sts:AssumeRole and the trust-policy update confirmation."
      },
      {
        "id": "IAM-R02",
        "label": "Policy addition confirmation",
        "type": "Direct screenshot",
        "claim": "Shows '1 policy added'.",
        "limitation": "Policy-addition confirmation."
      },
      {
        "id": "IAM-R03",
        "label": "Assumed-role console identity",
        "type": "Direct screenshot",
        "claim": "Shows the intended assumed-role identity in the console header.",
        "limitation": "Console role assumption only."
      },
      {
        "id": "IAM-R04",
        "label": "Recorded execution sequence",
        "type": "Contemporaneous coding-assistant execution notes",
        "claim": "Records supplied-policy selection, manual operator-user sign-in and the role-switch sequence."
      },
      {
        "id": "IAM-R05",
        "label": "Course-derived execution checklist",
        "type": "Guide-derived requirements",
        "claim": "Defines the supplied-policy alternatives, exact-role requirement and expected console verification.",
        "limitation": "Course requirements."
      },
      {
        "id": "IAM-R06",
        "label": "Learner direction and approvals",
        "type": "Curated chat provenance",
        "claim": "Records learner screenshots, manual sign-in and direction and approvals."
      },
      {
        "id": "IAM-R07",
        "label": "Operator-user console identity",
        "type": "Original learner-supplied screenshot",
        "claim": "Shows the operator-user console identity."
      },
      {
        "id": "IAM-R08",
        "label": "Earlier authentication failure",
        "type": "Original learner-supplied screenshot",
        "claim": "Shows the authentication-failed message during sign-in.",
        "limitation": "Sign-in workflow, separate from role trust."
      }
    ],
    "visuals": [
      {
        "src": "/aws-security/iam-evidence.svg",
        "title": "Role-assumption evidence",
        "alt": "Reviewed evidence excerpt showing a trust-policy update and intended assumed-role console identity.",
        "caption": "Typeset from the reviewed trust-update and role-switch captures. The recorded result is console role assumption.",
        "sourceIds": [
          "IAM-R01",
          "IAM-R03"
        ]
      }
    ]
  },
  {
    "id": "aws-firewall",
    "title": "Investigating suspicious traffic with AWS Network Firewall",
    "shortTitle": "Network Firewall investigation",
    "courseId": "C09",
    "summary": "Guided investigation of supplied firewall and DNS telemetry, followed by existing quarantine-group assignments with explicit DNS-test and connectivity limits.",
    "problem": "The course scenario required investigation of suspicious traffic across supplied spoke and inspection networks, including a simulated encoded DNS-query fixture, followed by quarantine of identified lab targets.",
    "objectives": [
      "Inspect the supplied network and protection controls without presenting them as a new architecture build.",
      "Use network and DNS telemetry to investigate the lab traffic and fictitious fixture.",
      "Assign the supplied quarantine groups and retain the observed scope of containment."
    ],
    "attribution": "Guided, AI-assisted practical work under Djessi Jorge’s direction and approvals. The course provided the network infrastructure and existing firewall, DNS and logging controls; the work investigated traffic and applied supplied quarantine groups.",
    "implementation": [
      "Queried ICMP traffic and SURICATA signatures in CloudWatch over the displayed 12-hour window.",
      "Decoded the course-supplied simulated DNS-label fixture to fictitious report content.",
      "Recorded curl exit code 6, Could not resolve host, at the DNS-protected stage. The observed result was DNS resolution failure rather than the expected TLS timeout.",
      "Applied the existing quarantine groups and checked three assignments in the refreshed instance table."
    ],
    "validation": [
      {
        "check": "Network alert queries",
        "expected": "Find the lab’s ICMP and signature-related traffic within the selected window.",
        "observed": "Displayed query totals show 396,192 ICMP matches and 12,163 SURICATA-signature matches over 12 hours."
      },
      {
        "check": "DNS versus TLS behaviour",
        "expected": "Check the earlier lab stage’s expected TLS timeout.",
        "observed": "Execution notes record curl exit code 6, Could not resolve host; the retained DNS-query capture shows four matches. The outcome was DNS failure, not a TLS timeout."
      },
      {
        "check": "Simulated DNS fixture",
        "expected": "Decode the supplied fictitious query-label input.",
        "observed": "The terminal shows decoded example report content explicitly labelled as fictitious course data."
      },
      {
        "check": "Quarantine assignments",
        "expected": "Apply the existing quarantine groups to the selected lab targets.",
        "observed": "The refreshed table shows three quarantine-group assignments. The existing groups retained internal-spoke connectivity."
      }
    ],
    "challenges": [
      {
        "issue": "The recorded curl test ended at DNS resolution before the expected TLS-timeout behaviour.",
        "handling": "Kept the recorded DNS outcome distinct and retained the existing protection controls."
      }
    ],
    "takeaways": [
      {
        "text": "A DNS failure and a TLS timeout exercise different layers; test stage and active controls must remain part of the result.",
        "basis": "Technical inference"
      },
      {
        "text": "Matched-event totals support a bounded query observation, not complete investigation of every returned row.",
        "basis": "Technical inference"
      },
      {
        "text": "Applying a quarantine group is narrower than proving complete isolation when internal-spoke egress remains allowed.",
        "basis": "Technical inference"
      }
    ],
    "improvements": [
      {
        "text": "Plan separate DNS and TLS checks at their intended lab stages without weakening already active protections.",
        "status": "Proposed — not completed"
      },
      {
        "text": "Retain complete query text, raw results, rule definitions and a combined target-to-group export before the sandbox ends.",
        "status": "Proposed — not completed"
      },
      {
        "text": "Add a scoped connectivity matrix to document permitted and denied paths after quarantine.",
        "status": "Proposed — not completed"
      }
    ],
    "resultLabel": "Traffic investigated; quarantine applied",
    "criticalCaveat": "DNS resolution failure, rather than the expected TLS timeout. Quarantine retained internal connectivity.",
    "code": "AWS-02",
    "certificateUrl": "https://www.coursera.org/account/accomplishments/certificate/4TAPGF8PFRSQ",
    "sourceReferences": [
      {
        "id": "NFW-R01",
        "label": "ICMP query result",
        "type": "Direct screenshot",
        "claim": "Shows the ICMP filter, 12-hour range and 396,192 matched events.",
        "limitation": "Displayed 12-hour query total."
      },
      {
        "id": "NFW-R02",
        "label": "SURICATA signature query result",
        "type": "Direct screenshot",
        "claim": "Shows the signature filter, 12-hour range and 12,163 matched events.",
        "limitation": "Displayed 12-hour query total."
      },
      {
        "id": "NFW-R03",
        "label": "DNS query at the recorded curl time",
        "type": "Direct screenshot with secondary execution interpretation",
        "claim": "Shows the DNS query and four matched results; execution notes record the DNS-resolution outcome."
      },
      {
        "id": "NFW-R04",
        "label": "Decoded fictitious DNS fixture",
        "type": "Direct terminal screenshot of simulated course input",
        "claim": "Shows decoded sample report text and a warning that actual identities and credentials must not be inferred.",
        "limitation": "Simulated course input."
      },
      {
        "id": "NFW-R05",
        "label": "Quarantine-group after-state",
        "type": "Direct screenshot",
        "claim": "Shows three quarantine-group entries in the refreshed security-group column."
      },
      {
        "id": "NFW-R06",
        "label": "Complementary instance view",
        "type": "Direct screenshot",
        "claim": "Shows a complementary view of the training targets."
      },
      {
        "id": "NFW-R07",
        "label": "Recorded investigation and control scope",
        "type": "Contemporaneous coding-assistant execution notes",
        "claim": "Records the DNS-test outcome and connectivity retained by the existing quarantine groups."
      }
    ],
    "visuals": [
      {
        "src": "/aws-security/firewall-evidence.svg",
        "title": "Query observations and test limits",
        "alt": "Reviewed evidence excerpt comparing two twelve-hour query totals, with DNS-failure and limited-quarantine caveats.",
        "caption": "Query totals are typeset from retained console views. The DNS-resolution outcome is recorded in the execution notes; quarantine retained internal connectivity.",
        "sourceIds": [
          "NFW-R01",
          "NFW-R02",
          "NFW-R03",
          "NFW-R04",
          "NFW-R05"
        ]
      }
    ]
  },
  {
    "id": "aws-encryption",
    "title": "Applying encryption to images and sales data",
    "shortTitle": "Image and sales-data encryption",
    "courseId": "C14",
    "summary": "Guided S3/KMS object-configuration checks and staged DynamoDB processing, with recorded exit status and table counts.",
    "problem": "The fictional course scenario required protection of medical imagery and sales records. Objectives covered KMS key management, S3 encryption, attribute-based image access and client-side DynamoDB encryption within supplied infrastructure and a supplied SalesAnalytics.py scaffold.",
    "objectives": [
      "Configure KMS-backed image encryption and exercise denied and allowed image access.",
      "Complete the mandatory staged sales-data exercise using the course scaffold.",
      "Check execution outcomes and table populations without treating them as proof of ciphertext or successful decryption."
    ],
    "attribution": "Guided, AI-assisted practical work under Djessi Jorge’s direction and approvals. The course provided the environment, image tools and SalesAnalytics.py scaffold; coding assistance prepared course-derived insertions and operated the documented workflow.",
    "implementation": [
      "Kept the older attempt begun on 7 November separate from the final attempt on 9 November.",
      "Used the supplied transfer tool for five XRay images and inspected an uploaded object’s SSE-KMS and Bucket Key settings.",
      "Retained an intentional image-access denial, a KMS key-tag update to ImageType=XRAY and a later XRay display as separate observations.",
      "Used course-derived insertions for the supplied SalesAnalytics.py scaffold. The recovered code consists of eleven prepared fragments rather than a complete executed script.",
      "Recorded five staged runs ending with exit code 0 and checked table populations separately. The prepared key-source helper simulated external retrieval with local random bytes."
    ],
    "validation": [
      {
        "check": "Image transfer and object configuration — 9 November",
        "expected": "Transfer the supplied images and inspect the uploaded object’s encryption configuration.",
        "observed": "The transfer tool reports five XRay images transferred. Object properties show SSE-KMS and Bucket Key Enabled."
      },
      {
        "check": "Image-access checks",
        "expected": "Retain the intentional denial and subsequent image-access observations.",
        "observed": "Separate captures show the denial, the ImageType=XRAY key-tag update and a later XRay display."
      },
      {
        "check": "Staged sales-data processing — 9 November",
        "expected": "Complete the staged scaffold runs and check table populations.",
        "observed": "Five run captures show exit code 0. Completed scans show Table1=1,033, Table2=93 and Table3=1,345. These are execution-status and population checks."
      },
      {
        "check": "Key-source example",
        "expected": "Identify the key source used by the prepared course example.",
        "observed": "Static source inspection shows local random bytes used to simulate external key retrieval."
      }
    ],
    "challenges": [
      {
        "issue": "Image access was denied during the intentional negative check.",
        "handling": "Retained the denial, key-tag update and later display as separate observations within the final attempt."
      }
    ],
    "takeaways": [
      {
        "text": "Pair denied and allowed access checks, and retain enough object, policy and tag context to bind the sequence.",
        "basis": "Technical inference"
      },
      {
        "text": "Execution status, data population and cryptographic correctness require separate evidence; five successful runs cannot substitute for ciphertext and decrypt/readback checks.",
        "basis": "Technical inference"
      },
      {
        "text": "A local random-byte helper is a key-source simulation, not a durable external key-management integration.",
        "basis": "Recorded handling"
      }
    ],
    "improvements": [
      {
        "text": "Export the complete executed script and the applied configuration, preserving attempt identity and supplied-scaffold attribution.",
        "status": "Proposed — not completed"
      },
      {
        "text": "Retain visible attribute-level exports and a documented encrypt/decrypt readback, including a persistent-key recovery check.",
        "status": "Proposed — not completed"
      },
      {
        "text": "Review scan pagination, idempotent loading and governed key retrieval before adapting this classroom design for operational use.",
        "status": "Proposed — not completed"
      }
    ],
    "resultLabel": "5 staged runs recorded",
    "criticalCaveat": "Final attempt: 9 November 2026. Execution status and table populations only; external key retrieval was simulated.",
    "code": "AWS-03",
    "certificateUrl": "https://www.coursera.org/account/accomplishments/certificate/54DT52F2GBDH",
    "sourceReferences": [
      {
        "id": "ENC-R01",
        "label": "Final-attempt object encryption properties",
        "type": "Original screenshot, visually inspected",
        "claim": "Image1.jpg visibly shows SSE-KMS and Bucket Key Enabled.",
        "limitation": "Object-level configuration."
      },
      {
        "id": "ENC-R02",
        "label": "Supplied image-transfer result",
        "type": "Original screenshot, visually inspected",
        "claim": "Five XRay images transferred and image transfer complete.",
        "limitation": "Image-transfer result."
      },
      {
        "id": "ENC-R03",
        "label": "Image-access denial and tag update",
        "type": "Original screenshots, visually inspected",
        "claim": "Shows the image-access denial and the ImageType=XRAY key-tag update."
      },
      {
        "id": "ENC-R04",
        "label": "Five staged run captures",
        "type": "Original screenshots, all five visually inspected",
        "claim": "Each ends with exit code 0; insertion outputs show 1,033, 93 and 1,345.",
        "limitation": "Recorded execution status and insertion counts."
      },
      {
        "id": "ENC-R05",
        "label": "Completed live item-count scans",
        "type": "Original screenshots, all three visually inspected",
        "claim": "Completed scans show Table1=1,033, Table2=93 and Table3=1,345.",
        "limitation": "Table populations only."
      },
      {
        "id": "ENC-R06",
        "label": "Attribute viewport limitation",
        "type": "Original screenshot, visually inspected",
        "claim": "Shows the item-browser scan controls.",
        "limitation": "Scan-control view only."
      },
      {
        "id": "ENC-R07",
        "label": "Final rotation edit form",
        "type": "Original screenshot, visually inspected",
        "claim": "Shows Enable and 365 days selected in the rotation edit form.",
        "limitation": "Edit-form selection only."
      },
      {
        "id": "ENC-R08",
        "label": "Prepared key-source simulation helper",
        "type": "Static source inspection only",
        "claim": "Both helper functions generate local random bytes and explicitly describe the on-premises key source as simulated.",
        "limitation": "Prepared source fragment; external key-source simulation."
      },
      {
        "id": "ENC-R09",
        "label": "Attempt history and staged implementation plan",
        "type": "Secondary recorded workflow/checkpoint",
        "claim": "Separates the older attempt from the final 9 November attempt."
      }
    ],
    "visuals": [
      {
        "src": "/aws-security/encryption-evidence.svg",
        "title": "Separate attempts and final-run observations",
        "alt": "Reviewed evidence excerpt separating the older attempt from the final nine November attempt, with five zero-exit runs and three table counts.",
        "caption": "Typeset from the final 9 November run and scan captures, with the older attempt separate. These record execution status and table populations; external key retrieval was simulated.",
        "sourceIds": [
          "ENC-R01",
          "ENC-R04",
          "ENC-R05",
          "ENC-R08",
          "ENC-R09"
        ]
      }
    ]
  },
  {
    "id": "aws-cloudwatch",
    "title": "Security monitoring with Amazon CloudWatch",
    "shortTitle": "CloudWatch security monitoring",
    "courseId": "C16",
    "summary": "Guided log collection and alarm testing in a supplied blog environment, with exact operators, periods and observed notification values preserved.",
    "problem": "The course scenario required monitoring authentication failures on an Amazon Linux database server and abnormal NAT egress. The course supplied the VPC, public/private subnets, load balancer, web server and database server; this was not a learner-designed production architecture.",
    "objectives": [
      "Collect the database server’s secure log with the CloudWatch agent.",
      "Test an authentication-failure metric, strict threshold alarm and confirmed notification path.",
      "Generate a controlled NAT traffic test and retain its alarm and notification result."
    ],
    "attribution": "Guided, AI-assisted practical work under Djessi Jorge’s direction and approvals, using course-provided infrastructure and instructions. Coding assistance performed the documented configuration and controlled tests.",
    "implementation": [
      "Checked the CloudWatch agent’s running/configured status in the supplied Systems Manager terminal.",
      "Tested the quoted authentication-failure pattern, retaining four matches from 43 sample events.",
      "Checked an authentication alarm using Sum, a strict >2 threshold over 300 seconds and notBreaching for missing data, with a matching SNS notification after four deliberate failures.",
      "Used a controlled sample upload for the NAT BytesOutToDestination test and checked the alarm and SNS notification against Sum >2,000,000 bytes over 900 seconds.",
      "Recorded the log group’s actual retention setting: Never expire."
    ],
    "validation": [
      {
        "check": "Agent and pattern test",
        "expected": "Check the agent state and match the deliberate authentication failures.",
        "observed": "The terminal shows successful configuration validation and running/configured status. The pattern test shows 4 matches from 43 sample events."
      },
      {
        "check": "Authentication alarm and notification",
        "expected": "Trigger ALARM when Sum is strictly >2 failures over 300 seconds.",
        "observed": "The console shows In alarm. The sanitised SNS notification records 4.0 >2.0 over 300 seconds, Sum and notBreaching for missing data. The failures were deliberate test conditions."
      },
      {
        "check": "NAT alarm and notification",
        "expected": "Trigger ALARM when Sum is strictly >2,000,000 outgoing bytes over 900 seconds.",
        "observed": "The controlled upload reports success and the console shows In alarm. The sanitised SNS notification records 2,586,909 >2,000,000 bytes over 900 seconds, Sum, with missing-data treatment set to 'missing'."
      },
      {
        "check": "Retention",
        "expected": "Record the log group’s actual retention setting.",
        "observed": "The log-group capture shows Retention: Never expire."
      }
    ],
    "challenges": [
      {
        "issue": "The authentication and NAT alarms used different strict thresholds and time windows.",
        "handling": "Checked each notification separately against its recorded statistic, comparison and period."
      }
    ],
    "takeaways": [
      {
        "text": "Validate log arrival, pattern matches, metric aggregation, alarm transition and notification as separate steps.",
        "basis": "Technical inference"
      },
      {
        "text": "Check comparison operators, aggregation periods and retention against the recorded configuration.",
        "basis": "Technical inference"
      }
    ],
    "improvements": [
      {
        "text": "Define an explicit retention policy with an operational and security rationale rather than retain the wizard default.",
        "status": "Proposed — not completed"
      },
      {
        "text": "Export the applied agent, metric-filter and alarm definitions together with raw log and metric-history samples.",
        "status": "Proposed — not completed"
      },
      {
        "text": "Add boundary-value tests for the strict thresholds and document notification-path failure handling.",
        "status": "Proposed — not completed"
      }
    ],
    "resultLabel": "Two alarm notifications recorded",
    "criticalCaveat": "Controlled tests: 4 failures against >2 / 300 seconds, and 2,586,909 bytes against >2,000,000 / 900 seconds. Retention: Never expire.",
    "code": "AWS-04",
    "certificateUrl": "https://www.coursera.org/account/accomplishments/certificate/CZRNKP9N5SNL",
    "sourceReferences": [
      {
        "id": "CW-R01",
        "label": "Agent validation and service status",
        "type": "Original screenshot, visually inspected",
        "claim": "Both configuration validation phases succeeded; service status is running/configured."
      },
      {
        "id": "CW-R02",
        "label": "Authentication pattern test",
        "type": "Original screenshot, visually inspected",
        "claim": "4 matches from 43 sample log events.",
        "limitation": "Pattern-test result."
      },
      {
        "id": "CW-R03",
        "label": "Metric-filter creation and actual retention",
        "type": "Original screenshot, visually inspected",
        "claim": "Filter created; log-group Retention visibly Never expire."
      },
      {
        "id": "CW-R04",
        "label": "Authentication alarm console result",
        "type": "Original screenshot, visually inspected",
        "claim": "In alarm; configured >2 for one datapoint within five minutes.",
        "limitation": "Console alarm state and configuration."
      },
      {
        "id": "CW-R05",
        "label": "NAT alarm console result",
        "type": "Original screenshot, visually inspected",
        "claim": "In alarm; configured >2,000,000 for one datapoint within fifteen minutes.",
        "limitation": "Console alarm state and configuration."
      },
      {
        "id": "CW-R06",
        "label": "Controlled sample-upload result",
        "type": "Original screenshot, visually inspected",
        "claim": "SampleData.zip upload reports success; deliberate failed authentications are also visible."
      },
      {
        "id": "CW-R07",
        "label": "Two retained SNS notification excerpts",
        "type": "Sanitised transcriptions of recovered original notifications, text inspected",
        "claim": "Retains the two SNS alarm comparisons: 4.0 >2.0 over 300 seconds and 2,586,909 >2,000,000 bytes over 900 seconds, including Sum and the recorded missing-data settings.",
        "limitation": "Sanitised notification transcriptions."
      }
    ],
    "visuals": [
      {
        "src": "/aws-security/cloudwatch-evidence.svg",
        "title": "Exact recorded alarm comparisons",
        "alt": "Reviewed evidence excerpt showing four authentication failures greater than two in three hundred seconds, and 2586909 bytes greater than 2000000 in nine hundred seconds; retention Never expire.",
        "caption": "Exact measurements are typeset from the sanitised SNS notification transcripts. Never expire is from the retained log-group capture. Deliberate failures and a controlled upload were test conditions.",
        "sourceIds": [
          "CW-R03",
          "CW-R04",
          "CW-R05",
          "CW-R07"
        ]
      }
    ]
  },
  {
    "id": "aws-incident-response",
    "title": "Manual incident response and automated quarantine",
    "shortTitle": "Incident response & quarantine",
    "courseId": "C18",
    "summary": "Guided response in a supplied training environment, separating simulated authentication failures, manual restoration and observed second-target quarantine states.",
    "problem": "The course scenario required preserving evidence and containing a training server after repeated failed SSH attempts, then configuring the supplied response pipeline for a second target. Failed authentication was the simulation trigger, not proof of a successful breach.",
    "objectives": [
      "Preserve the original target’s metadata and disk snapshot before changing access.",
      "Remove inbound SSH and validate Systems Manager access during manual restoration.",
      "Connect an EventBridge rule to the course-provided Lambda and check preservation and containment states on a separate training target."
    ],
    "attribution": "Guided, AI-assisted practical work under Djessi Jorge’s direction and approvals. The course provided the VPC, EC2, S3, CloudWatch and incident-response Lambda functions; the work configured and checked these supplied resources.",
    "implementation": [
      "Retained the metadata-object listing and Completed snapshot capture from the manual-preservation stage.",
      "Checked the remediated application group’s zero inbound rules and verified a live Systems Manager terminal during manual restoration.",
      "Configured an enabled EventBridge rule matching source log.lambda, with the existing course-provided incident-response Lambda as its target.",
      "Recorded the approved, deliberately failed SSH test against the second training target.",
      "Checked the second target’s metadata-object listing, termination protection, absent IAM role, quarantine-group association and timestamped Quarantined status, alongside two completed snapshot rows."
    ],
    "validation": [
      {
        "check": "Manual preservation",
        "expected": "Check the original target’s metadata-object listing and snapshot state.",
        "observed": "The manual-preservation captures show a 7.6 KB JSON object listed in S3 and a snapshot row marked Completed."
      },
      {
        "check": "Authentication investigation",
        "expected": "Observe the controlled failed-authentication test conditions.",
        "observed": "The filtered stream shows three timestamped authentication-failure entries; the separate second-target test returns Permission denied. This was a training simulation."
      },
      {
        "check": "Manual restoration",
        "expected": "Check inbound SSH removal and Systems Manager administration.",
        "observed": "The remediated application group shows zero inbound rules, and a live Systems Manager terminal is visible."
      },
      {
        "check": "Automation configuration",
        "expected": "Configure the enabled rule and supplied Lambda target.",
        "observed": "The created rule is Enabled on default with source log.lambda; its reviewed target is the course-provided Lambda. This is a configuration check."
      },
      {
        "check": "Second-target response states",
        "expected": "Check the visible preservation and containment states.",
        "observed": "S3 lists a 3.6 KB metadata object; two snapshot rows show Completed. The second target shows termination protection Enabled, no IAM role, the provided quarantine group and a timestamped Quarantined status."
      }
    ],
    "challenges": [
      {
        "issue": "The response tag used Quarantined followed by a timestamp.",
        "handling": "Retained the observed status and checked the other visible containment states separately."
      },
      {
        "issue": "Automation configuration and response-state observations answer different questions.",
        "handling": "Reviewed the enabled rule, supplied Lambda target and second-target states as separate checks."
      }
    ],
    "takeaways": [
      {
        "text": "Validate preservation, containment and restoration as separate stages against the intended target.",
        "basis": "Technical inference"
      },
      {
        "text": "Treat deliberately failed authentication as a simulation trigger rather than evidence of compromise.",
        "basis": "Technical inference"
      },
      {
        "text": "Systems Manager access can be checked while inbound SSH remains closed.",
        "basis": "Recorded handling"
      },
      {
        "text": "Keep automation configuration separate from observed response-state validation.",
        "basis": "Technical inference"
      }
    ],
    "improvements": [
      {
        "text": "Retain the matched EventBridge event, Lambda invocation logs and correlation identifiers for a stronger execution trail.",
        "status": "Proposed — not completed"
      },
      {
        "text": "Export and hash metadata payloads and record complete snapshot-to-volume mappings alongside the preservation evidence.",
        "status": "Proposed — not completed"
      },
      {
        "text": "Add measured containment timing and explicit checks for existing network sessions before making stronger isolation claims.",
        "status": "Proposed — not completed"
      }
    ],
    "resultLabel": "Manual restoration and second-target states checked",
    "criticalCaveat": "Controlled SSH simulation. The course-provided Lambda configuration and visible containment states were checked separately.",
    "code": "AWS-05",
    "certificateUrl": "https://www.coursera.org/account/accomplishments/certificate/IWBEMG1QSMM3",
    "sourceReferences": [
      {
        "id": "IR-01",
        "label": "Original-target metadata listing",
        "type": "Original console capture",
        "claim": "S3 lists a 7.6 KB JSON object.",
        "limitation": "Object listing."
      },
      {
        "id": "IR-02",
        "label": "Manual-preservation snapshot",
        "type": "Original console capture",
        "claim": "Snapshot shows Completed.",
        "limitation": "Completed snapshot state."
      },
      {
        "id": "IR-03",
        "label": "Authentication-failure stream",
        "type": "Original console capture",
        "claim": "Three timestamped authentication-failure entries are visible.",
        "limitation": "Controlled simulation."
      },
      {
        "id": "IR-04",
        "label": "Remediated application security group",
        "type": "Original console capture",
        "claim": "Zero inbound permission entries and no inbound rules are visible."
      },
      {
        "id": "IR-05",
        "label": "Systems Manager terminal",
        "type": "Original console capture",
        "claim": "A live terminal on the original target is visible."
      },
      {
        "id": "IR-06",
        "label": "Created EventBridge rule",
        "type": "Original console capture",
        "claim": "Enabled rule on default with source log.lambda is visible.",
        "limitation": "Rule configuration."
      },
      {
        "id": "IR-07",
        "label": "Reviewed target configuration",
        "type": "Original console capture",
        "claim": "The supplied incident-response Lambda is the target; Role is a dash.",
        "limitation": "Course-provided Lambda target configuration."
      },
      {
        "id": "IR-08",
        "label": "Controlled failed SSH test",
        "type": "Original console capture",
        "claim": "Permission denied follows the approved single-target command.",
        "limitation": "Deliberately failed training command."
      },
      {
        "id": "IR-09",
        "label": "Second-target metadata listing",
        "type": "Original console capture",
        "claim": "A 3.6 KB output object exists in a timestamped S3 folder.",
        "limitation": "Object listing."
      },
      {
        "id": "IR-10",
        "label": "Preservation snapshot states",
        "type": "Original console capture",
        "claim": "Two snapshot rows show Completed.",
        "limitation": "Completed snapshot states."
      },
      {
        "id": "IR-11",
        "label": "Second-target termination protection",
        "type": "Original console capture",
        "claim": "Termination protection is Enabled."
      },
      {
        "id": "IR-12",
        "label": "Second-target quarantine configuration",
        "type": "Original console capture",
        "claim": "IAM role is absent and the provided quarantine group is associated.",
        "limitation": "Visible instance configuration."
      },
      {
        "id": "IR-13",
        "label": "Second-target status tag",
        "type": "Original console capture",
        "claim": "The visible status is Quarantined followed by a timestamp.",
        "limitation": "Visible status tag."
      },
      {
        "id": "IR-14",
        "label": "Contemporaneous execution checkpoint",
        "type": "Assistant-maintained checkpoint",
        "claim": "Records learner approvals and workflow checkpoints."
      },
      {
        "id": "IR-15",
        "label": "Curated direction and approval provenance",
        "type": "Recovered provenance extract",
        "claim": "Records approvals for Systems Manager permissions, restoration and the controlled automation test."
      }
    ],
    "visuals": [
      {
        "src": "/aws-security/incident-response-evidence.svg",
        "title": "Preservation and response-state evidence",
        "alt": "Reviewed evidence excerpt separating manual restoration, automation configuration and visible second-target containment states.",
        "caption": "Typeset from reviewed object listings, snapshots and instance-state captures. SSH testing was a controlled simulation; the course-provided Lambda configuration and visible response states are separate observations.",
        "sourceIds": [
          "IR-01",
          "IR-02",
          "IR-05",
          "IR-09",
          "IR-10",
          "IR-11",
          "IR-12"
        ]
      }
    ]
  }
];

export const AWS_COMPLETION_SUMMARIES = [
  {
    "courseId": "C03",
    "title": "AWS Config — completion summary",
    "summary": "Completed the course lab on automating infrastructure compliance with AWS Config. The recovered record supports completion and the recorded grade, with no practical implementation claims.",
    "date": "7 November 2026",
    "grade": "100%",
    "url": "https://www.coursera.org/account/accomplishments/certificate/BSE9DZXHU4X7",
    "evidenceLimit": "Completion record only; no practical implementation is presented."
  },
  {
    "courseId": "C08",
    "title": "Network Traffic Controls — completion summary",
    "summary": "Completed the course lab on implementing and controlling network traffic on AWS. Completion is kept separate from any implementation or allowed/blocked traffic result.",
    "date": "7 November 2026",
    "grade": "100%",
    "url": "https://www.coursera.org/account/accomplishments/certificate/QT5FD1M5KIZ6",
    "evidenceLimit": "Completion record only; no practical implementation is presented."
  },
  {
    "courseId": "C10",
    "title": "AWS WAF — completion summary",
    "summary": "Completed the course lab on filtering and blocking web incursions with AWS WAF. The recorded grade establishes course completion, without claiming a recovered web-application firewall implementation.",
    "date": "6 November 2026",
    "grade": "100%",
    "url": "https://www.coursera.org/account/accomplishments/certificate/F7CXWSRXJUTX",
    "evidenceLimit": "Completion record only; no practical implementation is presented."
  }
];
