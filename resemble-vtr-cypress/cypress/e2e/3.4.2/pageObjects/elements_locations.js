const elements = {
  isLocal: true,
  email: 'input[name="identification"]',
  password: 'input[name="password"]',
  signIn: '#ember12',
  continueBtn: 'button.gh-btn.gh-btn-black.gh-btn-large',
  publishNowBtn: 'button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view',
  newPostBtn: 'a[title="New post"]',
  selectorSearch: 'div.gh-posts-list-item-group',
  updateBtn: 'button[data-test-button="publish-save"]',
  postList: 'li.gh-list-row.gh-posts-list-item.gh-post-list-plain-status',
  contentEntryMeta: 'span.gh-content-entry-meta',
  profileItem: 'a[data-test-nav="user-profile"]',
  changePassword: 'Change Password',
  passwordUpdated: 'Updated',
  postSettingsBtn: 'button[title="Settings"]',
  saveClose: 'Save & close',
  fullNamePosition: 1,
  pagesItem: 'a[href="#/pages/"]',
  newPage: 'a[href="#/editor/page/"]'
}

function getEnvElements() {
  return elements
}


module.exports = {
  getEnvElements
}