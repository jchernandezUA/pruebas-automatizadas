const element5796 = {
  isLocal: true,
  email: 'input[name="identification"]',
  password: 'input[name="password"]',
  signIn: '#ember5',
  continueBtn: 'button.gh-btn.gh-btn-black.gh-btn-large',
  publishNowBtn: 'button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view',
  newPostBtn: 'a[data-test-nav="new-story"]',
  selectorSearch: 'div.gh-posts-list-item-group',
  updateBtn: 'button[data-test-button="publish-save"]',
  postList: 'li.gh-list-row.gh-posts-list-item.gh-post-list-plain-status',
  contentEntryMeta: 'p.gh-content-entry-meta',
  profileItem: 'a[data-test-nav="user-profile"]',
  changePassword: 'Change password',
  passwordUpdated: 'Updated',
  postSettingsBtn: 'button[title="Settings"]',
  saveClose: 'Save & close',
  fullNamePosition: 1,
  pagesItem: 'a[href="#/pages/"]',
  newPage: 'a[href="#/editor/page/"]'
}

const element3420 = {
  email: 'input[name="identification"]',
  password: 'input[name="password"]',
  signIn: 'form#login button.login'
}

function getEnvElements() {
  return element5796
}


module.exports = {
  getEnvElements
}