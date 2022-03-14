import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Share } from 'react-bootstrap-icons';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

const ShareContent = ({
  url,
  title,
  content,
  tag,
  btnVariant,
  btnSize,
  btnClass,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant={btnVariant}
        size={btnSize}
        onClick={handleShow}
        className={btnClass}
      >
        Share <Share />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Share {title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EmailShareButton
            url={url}
            subject={title}
            body={content}
            className="px-1"
          >
            <EmailIcon size={45} round />
          </EmailShareButton>
          <FacebookShareButton
            url={url}
            quote={title}
            hashtag={tag}
            className="px-1"
          >
            <FacebookIcon size={45} round />
          </FacebookShareButton>
          <LinkedinShareButton
            url={url}
            title={title}
            summary={content}
            source={'https://birdflap.com'}
            className="px-1"
          >
            <LinkedinIcon size={45} round />
          </LinkedinShareButton>
          <RedditShareButton url={url} title={title} className="px-1">
            <RedditIcon size={45} round />
          </RedditShareButton>
          <TelegramShareButton url={url} title={title} className="px-1">
            <TelegramIcon size={45} round />
          </TelegramShareButton>
          <TwitterShareButton
            url={url}
            title={title}
            hashtags={[tag]}
            className="px-1"
          >
            <TwitterIcon size={45} round />
          </TwitterShareButton>
          <WhatsappShareButton url={url} title={title} className="px-1">
            <WhatsappIcon size={45} round />
          </WhatsappShareButton>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ShareContent;
