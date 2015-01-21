<?php

/**
 * error actions.
 *
 * @package    SplitemApp
 * @subpackage error
 * @author     Diego Ghersi <diego@ghersi.com.ar>
 */
class errorActions extends sfActions
{
    public function executeIndex(sfWebRequest $request)
    {
        $this->forward('error', 'notfound');
    }

    public function executeError(sfWebRequest $request)
    {
        // force HTTP 500.
        $response = $this->getResponse();
        $response->setStatusCode(500);
        $response->addCacheControlHttpHeader('no-cache');
    }

    public function executeNotfound(sfWebRequest $request)
    {
        // force HTTP 404.
        $response = $this->getResponse();
        $response->setStatusCode(404);
        $response->addCacheControlHttpHeader('no-cache');
    }
}
