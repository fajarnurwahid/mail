// start: Popper
const popperInstance = {}
document.querySelectorAll('.dropdown, .tooltip').forEach(function(item, i) {
    const id = 'popper-'+i
    const toggle = item.querySelector('.dropdown-toggle, .tooltip-toggle')
    const menu = item.querySelector('.dropdown-menu, .tooltip-menu')
    let offset = [0, 0]
    let placement = 'bottom-start'
    if(item.classList.contains('.dropdown')) {
        offset = [0, 8]
        placement = 'bottom-end'
    }
    item.dataset.popperId = id
    if(toggle && menu) {
        popperInstance[id] = Popper.createPopper(toggle, menu, {
            modifiers: [
                {
                    name: 'offset',
                        options: {
                        offset: offset,
                    },
                },
                {
                    name: 'preventOverflow',
                    options: {
                        padding: 16,
                    },
                },
                { 
                    name: 'eventListeners', 
                    enabled: false 
                }
            ],
            placement: placement
        });
    }
})
document.addEventListener('click', function(e) {
    const toggle = e.target.closest('.dropdown-toggle')
    const menu = e.target.closest('.dropdown-menu')
    if(toggle) {
        const dropdown = toggle.closest('.dropdown')
        if(dropdown) {
            const id = dropdown.dataset.popperId
            if(id) {
                if(dropdown.classList.contains('active')) {
                    hideDropdown()
                } else {
                    hideDropdown()
                    dropdown.classList.add('active')
                    showPopper(popperInstance[id])
                }
            }
        }
    } else if(!menu) {
        hideDropdown()
    }
})
document.querySelectorAll('.tooltip').forEach(function(item) {
    let timeout = null
    item.addEventListener('mouseenter', function() {
        if(!timeout) {
            timeout = setTimeout(function() {
                const id = item.dataset.popperId
                if(id) {
                    item.classList.add('active')
                    showPopper(popperInstance[id])
                }
            }, 1000)
        }
    })
    item.addEventListener('mouseleave', function() {
        if(timeout) {
            clearTimeout(timeout)
            hideTooltip()
            timeout = null
        }
    })
})

function hideTooltip() {
    document.querySelectorAll('.tooltip.active').forEach(function(item) {
        item.classList.remove('active')
        const id = item.dataset.popperId
        if(id) {
            hidePopper(popperInstance[id])
        }
    })
}
function hideDropdown() {
    document.querySelectorAll('.dropdown.active').forEach(function(item) {
        item.classList.remove('active')
        const id = item.dataset.popperId
        if(id) {
            hidePopper(popperInstance[id])
        }
    })
}
function showPopper(popperInstance) {
    popperInstance.setOptions(function(options) {
        return {
            ...options,
            modifiers: [
                ...options.modifiers,
                { name: 'eventListeners', enabled: true },
            ],
        }
    });
    popperInstance.update();
}
function hidePopper(popperInstance) {
    popperInstance.setOptions(function(options) {
        return {
            ...options,
            modifiers: [
                ...options.modifiers,
                { name: 'eventListeners', enabled: false },
            ],
        }
    });
}
// end: Popper



// start: Sidebar
const sidebarToggle = document.querySelector('.sidebar-toggle')
const sidebar = document.querySelector('.sidebar')
const sidebarOverlay = document.querySelector('.sidebar-overlay')
if(sidebarToggle && sidebar && sidebarOverlay) {
    sidebarToggle.addEventListener('click', function(e) {
        e.preventDefault()
        sidebar.classList.add('active')
        sidebarOverlay.classList.add('active')
    })
    sidebarOverlay.addEventListener('click', function(e) {
        e.preventDefault()
        sidebar.classList.remove('active')
        sidebarOverlay.classList.remove('active')
    })
}
// end: Sidebar