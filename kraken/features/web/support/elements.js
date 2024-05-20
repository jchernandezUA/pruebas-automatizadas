const element5141 = {
  isLocal: false,
  email: 'input[name="identification"]',
  password: 'input[name="password"]',
  signIn: '#ember10',
  continueBtn: 'button.gh-btn.gh-btn-black.gh-btn-large',
  publishNowBtn: 'button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view',
  newPostBtn: 'a[title="New post"]',
  selectorSearch: 'li.gh-list-row.gh-posts-list-item',
  updateBtn: 'button.gh-btn.gh-btn-editor.gh-editor-save-trigger.green.ember-view',
  postList: 'li.gh-list-row.gh-posts-list-item',
  contentEntryMeta: 'span.gh-content-entry-meta',
  profileItem: `a[href*="#/settings/staff/"]`,
  changePassword: 'Change Password',
  passwordUpdated: 'Saved',
  postSettingsBtn: 'button.settings-menu-toggle',
  saveClose: 'Save',
  fullNamePosition: 0,
  pagesItem: 'a[href="#/pages/"]',
  newPage: 'a[href="#/editor/z/"]',
  backSettings: 'button[data-testid="exit-settings"]'
}

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
  newPage: 'a[href="#/editor/page/"]',
  backSettings: 'button[data-testid="exit-settings"]'
}

function getEnvElements() {
  return element5796
}


module.exports = {
  getEnvElements
}