const logger = require('./logger')(module)

const enums = module.exports = {
  priorityFromValue (value) {
    logger(`priorityFromValue: [${value}]`)
    return Object.keys(enums.priority).find(key => enums.priority[key] === value)
  },
  state: {
    docId: '86f6ff5b-0c4e-46ad-9a5f-e90eb19c9b00',
    global: 'global',
    local: 'local'
  },
  priority: {
    lowest: 60,
    low: 50,
    normal: 40,
    medium: 30,
    high: 20,
    highest: 10
  },
  status: {
    // ---------- Queue Status Values ----------
    ready: 'ready',
    processing: 'processing',
    progress: 'progress',
    pausing: 'pausing',
    paused: 'paused',
    resumed: 'resumed',
    removed: 'removed',
    idle: 'idle',
    reset: 'reset',
    error: 'error',
    reviewed: 'reviewed',
    detached: 'detached',
    stopping: 'stopping',
    stopped: 'stopped',
    dropped: 'dropped',
    // ---------- Job Status Values ----------
    created: 'created', // Non-event, initial create job status
    added: 'added', // Event only, not a job status
    waiting: 'waiting',
    active: 'active',
    completed: 'completed',
    cancelled: 'cancelled',
    failed: 'failed',
    terminated: 'terminated',
    log: 'log', // Event only, not a job status
    updated: 'updated' // Event only, not a job status
  },
  options: {
    name: 'rjqJobList',
    host: 'localhost',
    port: 28015,
    db: 'rjqJobQueue',
    masterInterval: 310000, // 5 minutes and 10 seconds
    priority: 'normal',
    timeout: 300000, // 5 minutes
    retryMax: 3,
    retryDelay: 600000, // 10 minutes
    concurrency: 1,
    removeFinishedJobs: 15552000000 // 180 days
  },
  index: {
    indexActiveDateEnable: 'indexActiveDateEnable',
    indexInactivePriorityDateCreated: 'indexInactivePriorityDateCreated',
    indexFinishedDateFinished: 'indexFinishedDateFinished'
  },
  dbResult: {
    deleted: 'deleted',
    errors: 'errors',
    inserted: 'inserted',
    replaced: 'replaced',
    skipped: 'skipped',
    changes: 'changes',
    unchanged: 'unchanged'
  },
  log: {
    information: 'information',
    warning: 'warning',
    error: 'error'
  },
  message: {
    jobAdded: 'Job added to the queue',
    active: 'Job retrieved and active',
    completed: 'Job completed successfully',
    failed: 'Job processing failed',
    cancel: 'Job cancelled by Queue process handler',
    jobNotAdded: 'Job not added to the queue',
    jobAlreadyAdded: 'Job is already in the queue',
    jobInvalid: 'Job object is invalid',
    processTwice: 'Cannot call queue process twice',
    idInvalid: 'The job id is invalid',
    priorityInvalid: 'The job priority value is invalid',
    timeoutInvalid: 'The job timeout value is invalid',
    retryMaxIvalid: 'The job retryMax value is invalid',
    retryDelayIvalid: 'The job retryDelay value is invalid',
    dateEnableIvalid: 'The job dateEnable value is invalid',
    dbError: 'RethinkDB returned an error',
    concurrencyInvalid: 'Invalid concurrency value',
    cancelCallbackInvalid: 'The onCancel callback is not a function',
    globalStateError: 'The global state document change feed is invalid',
    noErrorStack: 'The error has no stack detail',
    noErrorMessage: 'The error has no message'
  }
}
