import React, { useState, useEffect } from "react";
import styles from "./MailtoLinkCreator.module.css";

const MailtoLinkCreator = () => {
  const [to, setTo] = useState("");
  const [cc, setCc] = useState("");
  const [bcc, setBcc] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [mailtoLink, setMailtoLink] = useState("");
  const [toError, setToError] = useState("");
  const [formNew, setFormNew] = useState(true);

  useEffect(() => {
    updateMailtoLink();
  }, [to, cc, bcc, subject, body]);

  const updateMailtoLink = () => {
    const queryParams = [
      subject && `subject=${encodeURIComponent(subject)}`,
      body && `body=${encodeURIComponent(body)}`,
      cc && `cc=${encodeURIComponent(cc)}`,
      bcc && `bcc=${encodeURIComponent(bcc)}`,
    ]
      .filter(Boolean)
      .join("&");

    const emailLink = `https://app.mailchain.com/mailto:${to}?${queryParams}`;
    setMailtoLink(emailLink);
  };

  const copyToClipboard = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(mailtoLink);
      alert("Mailto link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy mailto link: ", err);
    }
  };

  const validateMailchainAddress = (address) => {
    // Regex patterns for different address formats
    const mailchainAddressPattern = /^[a-zA-Z0-9\-]{2,20}@mailchain\.com$/;
    const nsServicesAddressPattern = /^\w+\.\w+@\w+\.mailchain\.com$/;
    const emojiAddressPattern =
      /^[a-zA-Z0-9\p{Emoji}]+(\.[a-zA-Z0-9\p{Emoji}]+)*@[a-zA-Z0-9]+\.mailchain\.com$/u;
    const ethereumAddressPattern =
      /^0x[a-fA-F0-9]{40}@ethereum\.mailchain\.com$/;
    const tezosAddressPattern = /^tz[1-3][a-z0-9]{33}@tezos\.mailchain\.com$/;

    return (
      mailchainAddressPattern.test(address) ||
      nsServicesAddressPattern.test(address) ||
      emojiAddressPattern.test(address) ||
      ethereumAddressPattern.test(address) ||
      tezosAddressPattern.test(address)
    );
  };

  const handleToChange = (e) => {
    setTo(e.target.value);
	setFormNew(false);
    setToError('');
};

const handleToBlur = (e) => {
    const addresses = e.target.value.split(',');
    for (let address of addresses) {
        address = address.trim();
        if (!validateMailchainAddress(address)) {
            setToError(`Invalid address: ${address}`);
            return;
        }
    }
    setToError('');
};

  return (
    <div className={styles.formWrapper}>
      <h2>Create A Custom Mailto Link</h2>
      <div className={styles.formGroup}>
        <label htmlFor="to" className={styles.formLabel}>
          <strong>To</strong> (required):
        </label>
        <input
          type="email"
          id="to"
          className={styles.formInput}
          value={to}
          onChange={handleToChange}
		  onBlur={handleToBlur}
          placeholder="hi@mailchain.com, epistola.eth@ens.mailchain.com, allofweb3.lens@lens.mailchain.com, etc..."
        />
        {formNew ? (
          <div className={styles.infoText}>Enter a Mailchain address</div>
        ) : (
          toError && <div className={styles.errorText}>{toError}</div>
        )}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="cc" className={styles.formLabel}>
          Cc:
        </label>
        <input
          type="email"
          id="cc"
          className={styles.formInput}
          value={cc}
          onChange={(e) => setCc(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="bcc" className={styles.formLabel}>
          Bcc:
        </label>
        <input
          type="email"
          id="bcc"
          className={styles.formInput}
          value={bcc}
          onChange={(e) => setBcc(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="subject" className={styles.formLabel}>
          Subject:
        </label>
        <input
          type="text"
          id="subject"
          className={styles.formInput}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="body" className={styles.formLabel}>
          Body:
        </label>
        <textarea
          id="body"
          className={styles.formInput}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <div className={styles.linkGroup}>
        <a
          href="#"
          onClick={copyToClipboard}
          disabled={!to}
          className={`${styles.submitLink} ${styles.primaryLink} ${
            !to ? styles.disabledLink : ""
          }`}
        >
          Copy Mailto Link to Clipboard
        </a>
        <a
          href={mailtoLink}
          target="_blank"
          rel="noopener noreferrer"
          disabled={!to}
          className={`${styles.submitLink} ${styles.secondaryLink} ${
            !to ? styles.disabledLink : ""
          }`}
        >
          Click to create email
        </a>
      </div>
    </div>
  );
};

export default MailtoLinkCreator;
